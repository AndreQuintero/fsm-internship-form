import { AgreementFormData, formSchema } from "@/app/services/agreement"
import { updateFormSubmitted } from "@/app/services/db/agreement"
import { auth } from "@/app/services/google"
import { ErrorTypes } from "@/app/types/response"
import { Auth, google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    // Get the query parameters from the URL
    const url = new URL(request.url)
    const hashId = url.searchParams.get('hash_id')

    const body = (await request.json()) as AgreementFormData
    const parsedBody: AgreementFormData = {
        ...body,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate)
    }
    // Use Zod to validate the received data against the UserSchema
    const result = formSchema.safeParse(parsedBody)
    if(result.success) {
        const AGREEMENT = "Yes, I Agree."
        const values = [
            [
                parsedBody.name,
                parsedBody.supervisorName,
                parsedBody.title,
                parsedBody.email,
                parsedBody.phone,
                parsedBody.organization,
                parsedBody.address,
                parsedBody.city,
                parsedBody.state,
                parsedBody.nation,
                parsedBody.zipCode,
                parsedBody.startDate.toISOString(),
                parsedBody.endDate.toISOString(),
                AGREEMENT,
                AGREEMENT,
                parsedBody.studentSignature,
                parsedBody.supervisorSignature
            ]
        ]
        try {
            const client = await auth.getClient()
            const googleSheets = google.sheets({ version: "v4", auth: client as Auth.OAuth2Client })
            const id = process.env.SHEET_ID
           
            await googleSheets.spreadsheets.values.append({
                auth,
                range: `${process.env.SHEET_AGREEMENT_NAME}!A1:B2`,
                spreadsheetId: id,
                valueInputOption: "USER_ENTERED",
                insertDataOption: "INSERT_ROWS",
                requestBody: {
                    values
                }
            })
        } catch{
            return NextResponse.json(
                { success: false, type: ErrorTypes.INTEGRATION_ERROR, errors: "Failed to submit data to Google Sheets. Please try again later." },
                { status: 500 }
            );
        }

        // UPDATE DB IF REGISTERS EXISTS 
        try {
            if(hashId) {
                await updateFormSubmitted(hashId, parsedBody) 
            }
        } catch(e) {
            // It doesn't matter if it doesn't save, because it submitted already
            console.log(e)
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