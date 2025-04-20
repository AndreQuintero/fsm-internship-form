import { UseFormReturn } from "react-hook-form";
import { ApplicationFormData } from "../services/application-form";
import { Response } from "../types/response";
import { useValidation } from "./useValidation";
import { submitRequest } from "../services/application";
import { toast } from "sonner";

export const useApplication = ( form : UseFormReturn<ApplicationFormData>) => {

    const { handleFormResponse } = useValidation<ApplicationFormData>(form)
    
    const onSubmitError = async () => {
           await form.trigger()
    }
        
    const onSubmit = async (values: ApplicationFormData) => {
        try {
            const response = await submitRequest(values)
            const content: Response = await response.json()
            handleFormResponse(content)
        } catch(e) {
            toast.error("Something went wrong, try again later.")
            console.log('catch', e)
        }
    }

    return {
        onSubmitError,
        onSubmit
    }
}