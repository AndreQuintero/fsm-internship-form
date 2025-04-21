import { FormStatus } from "@/app/services/form"
import { useRouter } from "next/navigation"
import { ComponentType, useEffect } from "react"
import { toast } from "sonner"

type WithValidationProps = {
    status?: FormStatus
}

export const  WithValidation = <P extends object>( WrappedComponent: ComponentType<P> ) => {
    return function WithFormValidationWrapper({
        status = FormStatus.VALID,
        ...props
    }: WithValidationProps & P) {

        const router = useRouter();

        const defineMessage = (status: FormStatus) => {
            const messages = {
                [FormStatus.VALID]: "",
                [FormStatus.INVALID]: "This link is invalid. Please check it again.",
                [FormStatus.SUBMITTED]: "This form has already been submitted.",
                [FormStatus.EXPIRED]: "This link is expired. Please submit a new form."
            };
            return messages[status]
        }

        useEffect(() => { 
            const message = defineMessage(status);
            if (!message) return;
            const timer = setTimeout(() => {
                toast.error(message);
                if (status !== FormStatus.VALID) {
                    router.push('/agreement');
                }
            }, 150);

            return () => clearTimeout(timer);
        }, [status, router]);

        return ( 
            <WrappedComponent {...props as P} /> 
        )
    }
}