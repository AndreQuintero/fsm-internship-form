import { UseFormReturn } from "react-hook-form"
import { AgreementFormData } from "../services/agreement"
import { ErrorTypes, Response } from "../types/response"
import { toast } from "sonner"

export type LinkGenerated =  Response & {link: string}

export const useAgreement = ( form : UseFormReturn<AgreementFormData>, onSuccess?: () => void) => {
        
    const onSubmit = async (values: AgreementFormData) => {
        try {
            const response = await fetch("/api/agreement/submit", {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const content: Response = await response.json()
            console.log(content)
            if(!content.success) {
                if(content.type === ErrorTypes.INTEGRATION_ERROR) {
                    toast.error(content.errors as string)
                }
                if(content.type === ErrorTypes.SCHEMA_VALIDATION) {
                    const errors = content.errors as Record<string, string>
                    Object.entries(errors).forEach(([key, value]) => {
                        form.setError(key as keyof AgreementFormData, { type: "manual", message: value }); // Set error for each field
                    })
                }
            } else {
                form.reset()
                toast.success("The form has been submitted successfully!")
                if(onSuccess) {
                    onSuccess()
                }
            }
            
        } catch(e) {
            console.log('catch', e)
        }
    }

    const generateLink = async (values: AgreementFormData) => {
        try {
            const response = await fetch("/api/agreement", {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const content: LinkGenerated = await response.json()
            return content
        } catch(e) {
            console.log('catch', e)
        }
    }

    return {
        onSubmit,
        generateLink
    }
}