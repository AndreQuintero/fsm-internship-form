import { DefaultValues, FieldValues, Path, UseFormReturn } from "react-hook-form";
import { ErrorTypes, Response } from "../types/response";
import { toast } from "sonner";

export const useValidation = <T extends FieldValues>(form : UseFormReturn<T>, options?: {
    onSuccess?: () => void;
    defaultValues?: DefaultValues<T>;
  }) => {
    const handleSchemaValidation = (response: Response) => {
        const errors = response.errors as Record<string, string>
        Object.entries(errors).forEach(([key, value]) => {
            form.setError(key as Path<T>, { type: "manual", message: value }) // Set error for each field
        })
    }

    const handleIntegrationValidation = (response: Response) => {
        toast.error(response.errors as string)
    }

    const validate = (response: Response) => {
        if(response.type === ErrorTypes.INTEGRATION_ERROR) {
            handleIntegrationValidation(response)
        }
        if(response.type === ErrorTypes.SCHEMA_VALIDATION) {
            handleSchemaValidation(response)
        }
    }

    const handleSuccess = () => {
        form.reset(options?.defaultValues ?? undefined)
        toast.success("The form has been submitted successfully!")
        options?.onSuccess?.()
    }

    const handleFormResponse = (response: Response) => {
        if(!response.success) {
            validate(response)
            return
        }
        handleSuccess()
    }
    return {
        handleFormResponse
    }
}