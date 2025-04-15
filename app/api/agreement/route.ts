import { AgreementFormData } from "@/app/services/agreement"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const body = (await request.json()) as AgreementFormData
    const id = uuidv4()

    return NextResponse.json(
        { success: true, link: id },
        { status: 200 }
    )
}