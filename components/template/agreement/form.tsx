'use client'
import { useAgreement } from "@/app/hooks/useAgreement";
import { AgreementFormData, formSchema } from "@/app/services/agreement";
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


export const AgreementForm = () => {
    const studentSigRef = useRef<SignaturePadRef>(null);
    const supervisorSigRef = useRef<SignaturePadRef>(null);
    const form = useForm<AgreementFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           name: "",
           supervisorName: "",
           title:"",
           email: "",
           phone: "",
           organization: "",
           address: "",
           city: "",
           state: "",
           nation: "",
           zipCode: "",
           startDate: undefined,
           endDate: undefined,
           studentAgreement: false,
           supervisorAgreement: false
        },
    });
    const clearSignature = () => {
        studentSigRef.current?.clear();
        supervisorSigRef.current?.clear();  
    }
    const { onSubmit } = useAgreement(form, clearSignature)

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
                    <GenerateLink form={form}/>       
                </div>
            </form>
        </Form> 
    )
}