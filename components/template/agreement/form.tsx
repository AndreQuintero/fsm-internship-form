'use client'
import { useAgreement } from "@/app/hooks/useAgreement";
import { AgreementFormData, DEFAULT_VALUES, formSchema } from "@/app/services/agreement-form";
import { AgreementData, convertAgreementDbDataToAgreementForm } from "@/app/services/db/agreement";
import { Address } from "@/components/layout/agreement/address";
import { GenerateLink } from "@/components/layout/agreement/generate-link";
import { InternshipDate } from "@/components/layout/agreement/internship-date";
import { PersonalInfo } from "@/components/layout/agreement/personal-info";
import { Signatures } from "@/components/layout/agreement/signatures";
import { TermsSection } from "@/components/layout/agreement/terms-conditions-section";
import { ButtonWithLoading } from "@/components/ui/buttonWithLoading";
import { Form } from "@/components/ui/form";
import { SignaturePadRef } from "@/components/ui/signature-pad";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { WithValidation } from "../withValidation";
import { UpdateForm } from "@/components/layout/agreement/update-form";


type AgreementFormProps = {
    data: AgreementData | null
}

const FormComponent = ({ data }: AgreementFormProps) => {
    const studentSigRef = useRef<SignaturePadRef>(null);
    const supervisorSigRef = useRef<SignaturePadRef>(null);
    const getRetrievedData = () => {
        return !data ? DEFAULT_VALUES : convertAgreementDbDataToAgreementForm(data)
    }
    
    const form = useForm<AgreementFormData>({
        resolver: zodResolver(formSchema),      
        defaultValues: getRetrievedData(),
        mode: "all"
    });
    const clearSignature = () => {
        studentSigRef.current?.clear();
        supervisorSigRef.current?.clear();  
    }
    const { onSubmit } = useAgreement(form, clearSignature, data?.hash)
    
    return (
        <Form {...form}>
            <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-4 mb-2.5">
                    <PersonalInfo form={form}/>
                    <Address form={form}/>
                    <InternshipDate form={form}/>
                    <TermsSection form={form}/>
                    <Signatures form={form} studentRef={studentSigRef} supervisorRef={supervisorSigRef}/>
                </div>
                <div className="flex gap-4 flex-wrap justify-center lg:justify-normal">
                    <ButtonWithLoading disabled={form.formState.isSubmitting} type="submit" isLoading={form.formState.isSubmitting} loadingText="Submitting..." text="Submit"/>
                    <span className="lg:mt-1">Or</span>
                    {!data ? <GenerateLink form={form}/> : <UpdateForm form={form} hash_id={data.hash}/> }       
                </div>
            </form>
        </Form> 
    )
}

export const AgreementForm = WithValidation(FormComponent)