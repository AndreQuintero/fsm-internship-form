import { ApplicationFormData, formSchema } from "@/app/services/application-form";
import { sendEmail } from "@/app/services/email";

import { insertDataIntoSheet } from "@/app/services/google-sheet";
import { ErrorTypes } from "@/app/types/response";
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
                new Date().toISOString(),
                parsedBody.name,
                parsedBody.birthDate.toISOString(),
                parsedBody.email,
                parsedBody.organizationName,
                parsedBody.webpage,
                parsedBody.streetLine1.concat(' ').concat(parsedBody.streetLine2 ?? '').concat(' ').concat(parsedBody.streetLine3 ?? ''),
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
            insertDataIntoSheet({
                sheetName: process.env.SHEET_APPLICATION_NAME!,
                values
            })
        } catch{
            return NextResponse.json(
                { success: false, type: ErrorTypes.SERVER_ERROR, errors: "Failed to submit data to Google Sheets. Please try again later." },
                { status: 500 }
            );
        }

        try {
            if(Boolean(process.env.EMAILJS_ENABLED)) {
                await sendEmail({
                    name: parsedBody.name, 
                    title: "Form Internship Application", 
                    email: parsedBody.email
                })
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