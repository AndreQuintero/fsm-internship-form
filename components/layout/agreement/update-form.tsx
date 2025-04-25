import { useAgreement } from "@/app/hooks/useAgreement"
import { AgreementFormData } from "@/app/services/agreement-form"
import { buttonVariants } from "@/components/ui/button"
import { ButtonWithLoading } from "@/components/ui/buttonWithLoading"
import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { toast } from "sonner"

type UpdateFormProps = {
    form: UseFormReturn<AgreementFormData>
    hash_id: string
}

export const UpdateForm = ({ form, hash_id }: UpdateFormProps) => {

    const [isLoading, setIsLoading] = useState(false)
    const { update } = useAgreement(form, undefined, hash_id)
    const handleUpdate = async (event: React.MouseEvent) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            await update(form.getValues())
        } catch {
            toast.error("An error occurred while updating the form")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <ButtonWithLoading onClick={handleUpdate} className={`w-full lg:w-fit ${buttonVariants({ variant: 'secondary' })}`} type="button" isLoading={isLoading} loadingText="Updating..." text="Update"/>
    )
}