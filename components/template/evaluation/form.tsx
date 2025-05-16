'use client'
import { useAccordionFormErrors } from "@/app/hooks/useAccordionFormErrors";
import { useEvaluation } from "@/app/hooks/useEvaluation";
import { AccordionForms, DEFAULT_VALUES, evaluationAccordionErrorMapping, EvaluationFormData, formSchema } from "@/app/services/evaluation-form";
import { Instructions } from "@/components/layout/evaluation/instructions";
import { Personal } from "@/components/layout/evaluation/personal";
import { ProfessionalSection } from "@/components/layout/evaluation/professional-section";
import { Rubric } from "@/components/layout/evaluation/rubric";
import { SpiritualSection } from "@/components/layout/evaluation/spiritual-section";
import { SupervisionSection } from "@/components/layout/evaluation/supervision-section";
import { Accordion } from "@/components/ui/accordion";
import { ButtonWithLoading } from "@/components/ui/buttonWithLoading";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const EvaluationForm = () => {

    const form = useForm<EvaluationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: DEFAULT_VALUES,
        mode: "all"
    })
    const { onSubmit, onSubmitError } = useEvaluation(form)
    const { errors, isSubmitting } = form.formState
    const { formsOpened, setFormsOpened } = useAccordionFormErrors<EvaluationFormData, AccordionForms>(errors, evaluationAccordionErrorMapping, [AccordionForms.SPIRITUAL])
    return (
        <Form {...form}>
            <form className="mt-10" onSubmit={form.handleSubmit(onSubmit, onSubmitError)}>
                <div className="space-y-10">
                    <Personal form={form}/>
                    <Instructions />
                    <Rubric />
                </div>
                <Accordion type="multiple" value={formsOpened} onValueChange={(value: string[]) => setFormsOpened(value as AccordionForms[])}>
                    <SpiritualSection form={form}/>
                    <ProfessionalSection form={form}/>
                    <SupervisionSection form={form}/>
                </Accordion>
                <ButtonWithLoading disabled={isSubmitting} type="submit" isLoading={isSubmitting} loadingText="Submitting..." text="Submit"/>
            </form>
        </Form>
    )
}