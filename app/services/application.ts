import { ApplicationFormData } from "./application-form"

export const submitRequest = async (values: ApplicationFormData) => {
    const response = await fetch("/api/application", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    return response
}