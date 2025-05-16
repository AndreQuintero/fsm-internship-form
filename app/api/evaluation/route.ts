import { sendEmail } from "@/app/services/email";
import { EvaluationFormData, formSchema } from "@/app/services/evaluation-form";
import { insertDataIntoSheet } from "@/app/services/google-sheet";
import { ErrorTypes } from "@/app/types/response";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = (await request.json()) as EvaluationFormData
   
    // Use Zod to validate the received data against the UserSchema
    const result = formSchema.safeParse(body)
  
    // Check if the validation is successful
    if (result.success) {
        const values = [
            [
                new Date().toISOString(),
                body.name,
                body.supervisorName,
                body.supervisorEmail,
                body.supervisorPhone,
                body.spiritualMaturity,
                body.meaningfulRelationships,
                body.demonstratesEmpathy,
                body.prayers,
                body.respondstoChallenges,
                body.demonstratesRespect,
                body.effectiveCommunications,
                body.listeningSkills,
                body.maintainsProfessionalism,
                body.effectiveCoaching,
                body.balanceMinistries,
                body.appreciationForFSM,
                body.doesResponsabilities,
                body.professionalismInAttitude,
                body.understandsDifferences,
                body.managesTime,
                body.meetSupervisor,
                body.acceptfeedback,
                body.openessToSpiritualGrowth,
                body.takesInitiative,
            
            ]
        ]
        try {
            insertDataIntoSheet({
                sheetName: process.env.SHEET_EVALUATION_NAME!,
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
                    name: body.name, 
                    title: "Form Internship Evaluation", 
                    email: body.supervisorEmail
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