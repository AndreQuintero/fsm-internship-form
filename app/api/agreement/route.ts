 
import { AgreementFormData } from "@/app/services/agreement-form"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid'
import { insertAgreement, updateForm } from "@/app/services/db/agreement";
import { ErrorTypes } from "@/app/types/response";


export async function POST(request: Request) {
    const body = (await request.json()) as AgreementFormData
    const id = uuidv4()
    try {
        await insertAgreement(id, body)
        const link = generateLink(id, request)
        return NextResponse.json(
            { success: true, link },
            { status: 200 }
        )
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { success: false },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    const url = new URL(request.url)
    const hashId = url.searchParams.get('hash_id')
    if(!hashId) return NextResponse.json(
        { success: false, type: ErrorTypes.SERVER_ERROR, errors: "Form ID is required." },
        { status: 500 }
    )
    const body = (await request.json()) as AgreementFormData
    try {
        await updateForm(hashId, body)
        return NextResponse.json(
            { success: true, body },
            { status: 200 }
        )
    } catch (e) {
        console.log(e)
        return NextResponse.json(
            { success: false },
            { status: 500 }
        )
    }
}

const generateLink = (id: string, request: Request) => {
    // Get the host from request headers
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
    const baseUrl = `${protocol}${host}`;
    
    const agreementLink = `${baseUrl}/agreement?hash_id=${id}`;
    return agreementLink
}