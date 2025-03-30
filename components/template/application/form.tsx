"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Accordion } from "@/components/ui/accordion";
import { StudentsInformation } from "@/components/layout/application/students";
import { WorksiteInformation } from "@/components/layout/application/worksite";
import { SupervisorInformation } from "@/components/layout/application/supervisor";
import { ScheduleInformation } from "@/components/layout/application/schedule";
import { AccordionForms, ApplicationFormData, formSchema } from "@/app/services/application";
import { useApplication } from "@/app/hooks/useApplication";
import { LoaderPinwheel } from "lucide-react";


export const ApplicationForm = () => {
   
      const [formsOpened, setFormsOpened] = useState<string[]>([AccordionForms.STUDENTS]);
      const form = useForm<ApplicationFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          birthDate: undefined,
          email: "",
          organizationName: "",
          webpage: "",
          streetLine1: "",
          streetLine2: "",
          streetLine3: "",
          city: "",
          state: "",
          nation: "",
          zipCode: "",
          supervisorName: "",
          title: "",
          supervisorEmail: "",
          supervisorPhone: "",
          startDate: undefined,
          endDate: undefined,
          jobDescription: ""
        },
      });
      const { onSubmit, onSubmitError } = useApplication(form)
      const { errors, isSubmitting } = form.formState
    
      
      const updateAccordionState = useCallback(() => {
        const hasStudentErrors = errors.name || errors.email || errors.birthDate
        const hasWorksiteErrors =
          errors.organizationName ||
          errors.webpage ||
          errors.streetLine1 ||
          errors.streetLine2 ||
          errors.streetLine3 ||
          errors.city ||
          errors.state ||
          errors.nation ||
          errors.zipCode;
    
        const hasSupervisorErrors = errors.supervisorName || errors.title || errors.supervisorEmail || errors.supervisorPhone
    
        const hasScheduleErrors = errors.startDate || errors.endDate || errors.jobDescription
    
        const newAccordionValue = [...formsOpened];
        if (hasStudentErrors && !newAccordionValue.includes(AccordionForms.STUDENTS)) {
          newAccordionValue.push(AccordionForms.STUDENTS)
        }
    
        if (hasWorksiteErrors && !newAccordionValue.includes(AccordionForms.WORKSITE)) {
          newAccordionValue.push(AccordionForms.WORKSITE)
        }
    
        if(hasSupervisorErrors && !newAccordionValue.includes(AccordionForms.WORKSITE_SUPERVISOR)) {
          newAccordionValue.push(AccordionForms.WORKSITE_SUPERVISOR)
        }
    
        if(hasScheduleErrors && !newAccordionValue.includes(AccordionForms.WORK_SCHEDULE)) {
          newAccordionValue.push(AccordionForms.WORK_SCHEDULE)
        }
    
        if (JSON.stringify(newAccordionValue) !== JSON.stringify(formsOpened)) {
          setFormsOpened(newAccordionValue);
        }
      }, [errors, formsOpened]);
      // Use useEffect to react to changes in errors
      useEffect(() => {
        updateAccordionState()
      }, [updateAccordionState]); // Trigger this effect whenever errors change
    
     
    
      return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onSubmitError)}>
              <Accordion type="multiple" value={formsOpened} onValueChange={setFormsOpened}>
                <StudentsInformation form={form}/>
                <WorksiteInformation form={form}/>
                <SupervisorInformation form={form}/>
                <ScheduleInformation form={form}/>
              </Accordion>
              <Button className="w-full lg:w-fit" disabled={isSubmitting} type="submit">{isSubmitting ? (
                 <div className="flex items-center gap-2">
                 <LoaderPinwheel className="animate-spin h-4 w-4" />
                 <span>Submitting...</span>
               </div>
              ) : "Submit" }</Button>
            </form>
        </Form>
      )
}