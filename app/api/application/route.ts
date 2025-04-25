import { ApplicationFormData, formSchema } from "@/app/services/application-form";

import { auth } from "@/app/services/google";
import { ErrorTypes } from "@/app/types/response";
import { google, Auth } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = (await request.json()) as ApplicationFormData
    const parsedBody: ApplicationFormData = {
        ...body,
        birthDate: new Date(body.birthDate),
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate)
    }
    // Use Zod to validate the received data against the UserSchema
    const result = formSchema.safeParse(parsedBody)
  
    // Check if the validation is successful
    if (result.success) {
        const values = [
            [
                parsedBody.name,
                parsedBody.birthDate.toISOString(),
                parsedBody.email,
                parsedBody.organizationName,
                parsedBody.webpage,
                parsedBody.streetLine1,
                parsedBody.streetLine2,
                parsedBody.streetLine3,
                parsedBody.city,
                parsedBody.state,
                parsedBody.nation,
                parsedBody.zipCode,
                parsedBody.supervisorName,
                parsedBody.title,
                parsedBody.supervisorEmail,
                parsedBody.supervisorPhone,
                parsedBody.startDate.toISOString(),
                parsedBody.endDate.toISOString(),
                parsedBody.jobDescription
            ]
        ]
        try {
            const client = await auth.getClient()
            const googleSheets = google.sheets({ version: "v4", auth: client as Auth.OAuth2Client })
            const id = process.env.SHEET_ID
           
            await googleSheets.spreadsheets.values.append({
                auth,
                range: `${process.env.SHEET_APPLICATION_NAME}!A1:B2`,
                spreadsheetId: id,
                valueInputOption: "USER_ENTERED",
                insertDataOption: "INSERT_ROWS",
                requestBody: {
                    values
                }
            })
        } catch{
            return NextResponse.json(
                { success: false, type: ErrorTypes.SERVER_ERROR, errors: "Failed to submit data to Google Sheets. Please try again later." },
                { status: 500 }
            );
        }

        try {
            if(Boolean(process.env.EMAILJS_ENABLED)) {
                await sendEmail(parsedBody)
            }    
        } catch(e) {
            console.log("Error to send email" + e)
        }
        return NextResponse.json(
            { success: true },
            { status: 200 }
        )
    }
  
    // If validation errors, map them into an object
    const serverErrors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) || []
    )
  
    // Respond with a JSON object containing the validation errors
    return NextResponse.json({ success: false, type: ErrorTypes.SCHEMA_VALIDATION, errors: serverErrors }, {status: 400})
  }


  const sendEmail = async (data: ApplicationFormData) => {
    const params = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: {
            name: data.name,
            title: "Form Internship Application",
            email: data.email
        },
        accessToken: process.env.EMAILJS_PRIVATE_KEY
    }
    return await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
  }