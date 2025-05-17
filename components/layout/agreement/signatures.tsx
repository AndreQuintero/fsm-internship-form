import { FormAgreementProps } from "@/app/services/agreement-form"
import {  FormField, FormMessage } from "@/components/ui/form"
import { FormItemWrapper } from "@/components/ui/form-item-wrapper"
import { SignaturePad, SignaturePadRef } from "@/components/ui/signature-pad"
import { RefObject } from "react"


type SignaturesProps = FormAgreementProps & {
    studentRef: RefObject<SignaturePadRef | null>
    supervisorRef: RefObject<SignaturePadRef | null>
}
export const Signatures = ({ form, studentRef, supervisorRef }: SignaturesProps) => {
    return (
        <>
            <FormField
                control={form.control}
                name="studentSignature"
                render={() => (
                    <FormItemWrapper label="Student Signature:" message={<FormMessage />}>
                        <SignaturePad ref={studentRef} name="studentSignature" />
                    </FormItemWrapper>
                )}
            />
            <FormField
                control={form.control}
                name="supervisorSignature"
                render={() => (
                    <FormItemWrapper label="Supervisor Signature:" message={<FormMessage />}>
                        <SignaturePad ref={supervisorRef} name="supervisorSignature" />
                    </FormItemWrapper>
                )}
            />
        </>
    )
}