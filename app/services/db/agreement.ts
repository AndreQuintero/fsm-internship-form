import { neon } from "@neondatabase/serverless"
import { AgreementFormData, AgreementFormStatus } from "../agreement"
import { convertDateToIsoString } from "../date"

export const getConnection = () => {
    return neon(process.env.DATABASE_URL!)
}

export const insertAgreement = async (hash_id: string, body: AgreementFormData) => {
    const sql = getConnection()
    await sql`INSERT INTO agreement (
        hash, 
        name, 
        supervisor_name, 
        title, 
        email, 
        phone, 
        organization, 
        address, 
        city, 
        state, 
        nation, 
        zip_code, 
        start_date, 
        end_date, 
        student_agreement, 
        supervisor_agreement, 
        student_signature, 
        supervisor_signature, 
        form_status,
        created_at, 
        updated_at
    ) VALUES (
        ${hash_id}, 
        ${body.name}, 
        ${body.supervisorName}, 
        ${body.title}, 
        ${body.email}, 
        ${body.phone}, 
        ${body.organization}, 
        ${body.address}, 
        ${body.city}, 
        ${body.state}, 
        ${body.nation}, 
        ${body.zipCode}, 
        ${convertDateToIsoString(body.startDate)}, 
        ${convertDateToIsoString(body.endDate)}, 
        ${body.studentAgreement}, 
        ${body.supervisorAgreement}, 
        ${body.studentSignature}, 
        ${body.supervisorSignature}, 
        ${AgreementFormStatus.VALID}, 
        NOW(), 
        NOW()
    )`
}