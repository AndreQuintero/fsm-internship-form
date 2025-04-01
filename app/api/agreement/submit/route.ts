import { AgreementFormData, formSchema } from "@/app/services/agreement"
import { ErrorTypes } from "@/app/types/response"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body = (await request.json()) as AgreementFormData
    const parsedBody: AgreementFormData = {
        ...body,
        startDate: new Date(body.startDate),
        endDate: new Date(body.endDate)
    }
    // Use Zod to validate the received data against the UserSchema
    const result = formSchema.safeParse(parsedBody)
    if(result.success) {
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