'use client'
import { useAccordionFormErrors } from "@/app/hooks/useAccordionFormErrors";
import { AccordionForms, DEFAULT_VALUES, evaluationAccordionErrorMapping, EvaluationFormData, formSchema } from "@/app/services/evaluation-form";
import { Instructions } from "@/components/layout/evaluation/instructions";
import { Personal } from "@/components/layout/evaluation/personal";
import { Rubric } from "@/components/layout/evaluation/rubric";
import { SpiritualSection } from "@/components/layout/evaluation/spiritual-section";
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
    const { errors } = form.formState
    const { formsOpened, setFormsOpened } = useAccordionFormErrors<EvaluationFormData, AccordionForms>(errors, evaluationAccordionErrorMapping, [AccordionForms.SPIRITUAL])
    return (
        <Form {...form}>
            <form className="mt-10">
                <div className="space-y-10">
                    <Personal form={form}/>
                    <Instructions />
                    <Rubric />
                </div>
                <Accordion type="multiple" value={formsOpened} onValueChange={(value: string[]) => setFormsOpened(value as AccordionForms[])}>
                    <SpiritualSection form={form}/>
                </Accordion>
                <ButtonWithLoading disabled={form.formState.isSubmitting} type="submit" isLoading={form.formState.isSubmitting} loadingText="Submitting..." text="Submit"/>
            </form>
        </Form>
    )
}