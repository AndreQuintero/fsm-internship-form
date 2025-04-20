import { AgreementFormData } from "./agreement-form";
import { setUrl } from "./hash";

export const submitRequest = async (values: AgreementFormData, hash_id?: string) => {
    const response = await fetch(setUrl("/api/agreement/submit", hash_id), {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    return response
}

export const generateLinkRequest = async (values: AgreementFormData) => {
    const response = await fetch("/api/agreement", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    return response
}