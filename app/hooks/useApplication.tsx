import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../services/application";
import { ErrorTypes, Response } from "../types/response";
import { toast } from "sonner";

export const useApplication = ( form : UseFormReturn<ApplicationFormData>) => {

    const onSubmitError = async () => {
           await form.trigger()
    }
        
    const onSubmit = async (values: ApplicationFormData) => {
        try {
            const response = await fetch("/api/application", {
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
                        form.setError(key as keyof ApplicationFormData, { type: "manual", message: value }); // Set error for each field
                    })
                }
            } else {
                form.reset()
                toast.success("The form has been submitted successfully!")
            }
            
        } catch(e) {
            console.log('catch', e)
        }
    }

    return {
        onSubmitError,
        onSubmit
    }
}