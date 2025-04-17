import { neon } from "@neondatabase/serverless"
import { AgreementFormData, AgreementFormStatus } from "../agreement"
import { convertDateToIsoString } from "../date"

export type AgreementData = {
    id: number,
    hash: string,
    name: string,
    supervisor_name: string,
    title: string,
    email: string,
    phone: string,
    organization: string,
    address: string,
    city: string,
    state: string,
    nation: string,
    zip_code: string,
    start_date: Date,
    end_date: Date,
    student_agreement: boolean,
    supervisor_agreement: boolean,
    student_signature: string,
    supervisor_signature: string,
    form_status: AgreementFormStatus,
    created_at: string,
    updated_at: string
}

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

export const getAgreementByHashId = async (hash_id: string) => {
    const sql = getConnection()
    const agreement  = await sql`SELECT * FROM agreement WHERE hash = ${hash_id}` as AgreementData[]
    return agreement[0]
}


export const convertAgreementDbDataToAgreementForm = (data: AgreementData): AgreementFormData => {
    return {
        ...data,
        supervisorName: data.supervisor_name,
        startDate: data.start_date,
        zipCode: data.zip_code,
        endDate: data.end_date,
        studentAgreement: data.student_agreement,
        supervisorAgreement: data.supervisor_agreement,
        studentSignature: data.student_signature,
        supervisorSignature: data.supervisor_signature
    }
}


const updateFormStatus = async (status: AgreementFormStatus, hash_id: string, body: AgreementFormData) => {
    const sql = getConnection()
    await sql`UPDATE agreement set 
        name = ${body.name}, 
        supervisor_name = ${body.supervisorName}, 
        title = ${body.title}, 
        email = ${body.email}, 
        phone = ${body.phone}, 
        organization = ${body.organization}, 
        address = ${body.address}, 
        city = ${body.city}, 
        state = ${body.state}, 
        nation = ${body.nation}, 
        zip_code = ${body.zipCode}, 
        start_date = ${convertDateToIsoString(body.startDate)}, 
        end_date = ${convertDateToIsoString(body.endDate)}, 
        student_agreement = ${body.studentAgreement}, 
        supervisor_agreement = ${body.supervisorAgreement}, 
        student_signature = ${body.studentSignature}, 
        supervisor_signature = ${body.supervisorSignature}, 
        updated_at = NOW(),
        form_status = ${status} 
        WHERE hash = ${hash_id}`
}

export const updateFormSubmitted = async (hash_id: string, body: AgreementFormData) => {
    await updateFormStatus(AgreementFormStatus.SUBMITTED, hash_id, body)
}