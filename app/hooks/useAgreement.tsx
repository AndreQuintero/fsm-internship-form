import { UseFormReturn } from "react-hook-form"
import { AgreementFormData, DEFAULT_VALUES } from "../services/agreement-form"
import { Response } from "../types/response"
import { useValidation } from "./useValidation"
import { generateLinkRequest, submitRequest, updateForm } from "../services/agreement"
import { toast } from "sonner"

export type LinkGenerated =  Response & {link: string}

export const useAgreement = ( form : UseFormReturn<AgreementFormData>, onSuccess?: () => void, hash_id?: string) => {
    
    const { handleFormResponse } = useValidation<AgreementFormData>(form, {
        defaultValues: DEFAULT_VALUES,
        onSuccess
    })
    
    const onSubmit = async (values: AgreementFormData) => {
        try {
            const response = await submitRequest(values, hash_id)
            const content: Response = await response.json()
            handleFormResponse(content)
        } catch(e) {
            console.log('catch', e)
        }
    }

    const generateLink = async (values: AgreementFormData) => {
        try {
            const response = await generateLinkRequest(values)
            const content: LinkGenerated = await response.json()
            return content
        } catch(e) {
            toast.error("Something went wrong, try again later.")
            console.log('catch', e)
        }
    }

    const update = async(values: AgreementFormData) => {
        try {
            const response = await updateForm(values, hash_id!)
            const content: Response = await response.json()
            handleFormResponse(content, "The form has been updated successfully!", false)
        } catch(e) {
            toast.error("Something went wrong, try again later.")
            console.log('catch', e)
        }
    }

    return {
        onSubmit,
        generateLink,
        update
    }
}