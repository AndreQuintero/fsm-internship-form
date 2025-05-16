import { EvaluationFormData } from "./evaluation-form"

export const submitRequest = async (values: EvaluationFormData) => {
    const response = await fetch("/api/evaluation", {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    return response
}