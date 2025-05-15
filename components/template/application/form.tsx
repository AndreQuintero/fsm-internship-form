"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Accordion } from "@/components/ui/accordion";
import { StudentsInformation } from "@/components/layout/application/students";
import { WorksiteInformation } from "@/components/layout/application/worksite";
import { SupervisorInformation } from "@/components/layout/application/supervisor";
import { ScheduleInformation } from "@/components/layout/application/schedule";
import { AccordionForms, applicationAccordionErrorMapping, ApplicationFormData, DEFAULT_VALUES, formSchema } from "@/app/services/application-form";
import { useApplication } from "@/app/hooks/useApplication";
import { ButtonWithLoading } from "@/components/ui/buttonWithLoading";
import { useAccordionFormErrors } from "@/app/hooks/useAccordionFormErrors";


export const ApplicationForm = () => {

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "all"
  });
  const { onSubmit, onSubmitError } = useApplication(form)
  const { errors, isSubmitting } = form.formState

  const { formsOpened, setFormsOpened } = useAccordionFormErrors<ApplicationFormData, AccordionForms>
    ( errors, applicationAccordionErrorMapping,[AccordionForms.STUDENTS])
    
      return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onSubmitError)}>
              <Accordion type="multiple" value={formsOpened} onValueChange={(value: string[]) => setFormsOpened(value as AccordionForms[])}>
                <StudentsInformation form={form}/>
                <WorksiteInformation form={form}/>
                <SupervisorInformation form={form}/>
                <ScheduleInformation form={form}/>
              </Accordion>
              <ButtonWithLoading disabled={isSubmitting} type="submit" isLoading={isSubmitting} loadingText="Submitting..." text="Submit"/>
            </form>
        </Form>
      )
}