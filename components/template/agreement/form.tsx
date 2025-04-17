'use client'
import { useAgreement } from "@/app/hooks/useAgreement";
import { AgreementFormData, DEFAULT_VALUES, formSchema } from "@/app/services/agreement";
import { AgreementData, convertAgreementDbDataToAgreementForm } from "@/app/services/db/agreement";
import { Address } from "@/components/layout/agreement/address";
import { GenerateLink } from "@/components/layout/agreement/generate-link";
import { InternshipDate } from "@/components/layout/agreement/internship-date";
import { PersonalInfo } from "@/components/layout/agreement/personal-info";
import { Signatures } from "@/components/layout/agreement/signatures";
import { TermsSection } from "@/components/layout/agreement/terms-conditions-section";
import { buttonVariants } from "@/components/ui/button";
import { ButtonWithLoading } from "@/components/ui/buttonWithLoading";
import { Form } from "@/components/ui/form";
import { SignaturePadRef } from "@/components/ui/signature-pad";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";


type AgreementFormProps = {
    data: AgreementData | null
}

export const AgreementForm = ({ data }: AgreementFormProps) => {

    //TODO: MAKE A PARENT COMPONENT THAT HANDLES THE FORM STATUS, IF IT'S NOT VALID, REDIRECT TO /agreement AND TOAST THE ERRORS
    const studentSigRef = useRef<SignaturePadRef>(null);
    const supervisorSigRef = useRef<SignaturePadRef>(null);
    const getRetrievedData = () => {
        return !data ? DEFAULT_VALUES : convertAgreementDbDataToAgreementForm(data)
    }
    
    const form = useForm<AgreementFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            ...getRetrievedData()
        },
    });
    const clearSignature = () => {
        studentSigRef.current?.clear();
        supervisorSigRef.current?.clear();  
    }
    const { onSubmit } = useAgreement(form, clearSignature, data?.hash)

    return (
        <Form {...form}>
            <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-8 mb-3.5">
                    <PersonalInfo form={form}/>
                    <Address form={form}/>
                    <InternshipDate form={form}/>
                    <TermsSection form={form}/>
                    <Signatures form={form} studentRef={studentSigRef} supervisorRef={supervisorSigRef}/>
                </div>
                <div className="flex gap-4 flex-wrap justify-center lg:justify-normal">
                    <ButtonWithLoading disabled={form.formState.isSubmitting} type="submit" isLoading={form.formState.isSubmitting} loadingText="Submitting..." text="Submit"/>
                    <span className="lg:mt-1">Or</span>
                    {!data ? <GenerateLink form={form}/> : 
                    <ButtonWithLoading className={`w-full lg:w-fit ${buttonVariants({ variant: 'secondary' })}`} type="button" isLoading={form.formState.isSubmitting} loadingText="Updating..." text="Update"/>
                    }       
                </div>
            </form>
        </Form> 
    )
}