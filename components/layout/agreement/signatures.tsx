import { FormAgreementProps } from "@/app/services/agreement-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
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
                <FormItem>
                    <FormLabel>Student Signature:</FormLabel>
                    <FormControl>
                        <SignaturePad ref={studentRef} name="studentSignature" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="supervisorSignature"
                render={() => (
                <FormItem>
                    <FormLabel>Supervisor Signature:</FormLabel>
                    <FormControl>
                        <SignaturePad ref={supervisorRef} name="supervisorSignature" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </>
    )
}