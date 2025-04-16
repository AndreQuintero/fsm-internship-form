 
import { AgreementFormData } from "@/app/services/agreement"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid'
import { insertAgreement } from "@/app/services/db/agreement";


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

const generateLink = (id: string, request: Request) => {
    // Get the host from request headers
    const host = request.headers.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http://' : 'https://';
    const baseUrl = `${protocol}${host}`;
    
    const agreementLink = `${baseUrl}/agreement?hash_id=${id}`;
    return agreementLink
}