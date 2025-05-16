import { UseFormReturn } from "react-hook-form";
import { Response } from "../types/response";
import { useValidation } from "./useValidation";
import { submitRequest } from "../services/evaluation";
import { toast } from "sonner";
import { EvaluationFormData } from "../services/evaluation-form";

export const useEvaluation = ( form : UseFormReturn<EvaluationFormData>) => {

    const { handleFormResponse } = useValidation<EvaluationFormData>(form)
    
    const onSubmitError = async () => {
           await form.trigger()
    }
        
    const onSubmit = async (values: EvaluationFormData) => {
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