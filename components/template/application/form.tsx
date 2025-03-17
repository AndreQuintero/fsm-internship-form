"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Accordion } from "@/components/ui/accordion";
import { StudentsInformation } from "@/components/layout/application/students";
import { WorksiteInformation } from "@/components/layout/application/worksite";
import { SupervisorInformation } from "@/components/layout/application/supervisor";
import { ScheduleInformation } from "@/components/layout/application/schedule";

export enum AccordionForms {
    STUDENTS = "STUDENTS",
    WORKSITE = "WORKSITE",
    WORKSITE_SUPERVISOR = "WORKSITE_SUPERVISOR",
    WORK_SCHEDULE = "WORK_SCHEDULE"
}

export const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    birthDate: z.date({ required_error: "Date of Birth is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    organizationName: z.string().min(1, { message: "Church/Organization name is required" }),
    webpage: z.string().optional(),
    streetLine1: z.string().min(1, { message: "Street Line is required" }),
    streetLine2: z.string().optional(),
    streetLine3: z.string().optional(),
    city: z.string().min(1, { message: "City name is required" }),
    state: z.string().min(1, { message: "State name is required" }),
    nation: z.string().min(1, { message: "Nation name is required" }),
    zipCode: z.string().min(1, { message: "Zip code is required" }),
    supervisorName: z.string().min(1, { message: "Supervisor name is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    supervisorEmail: z.string()
    .min(1, { message: "Supervisor email is required" })
    .email({ message: "Please enter a valid email address" }),
    supervisorPhone: z.string().min(1, { message: "Supervisor phone number is required" }),
    startDate: z.date({ required_error: "Start Date is required" }),
    endDate: z.date({ required_error: "End Date is required" }),
    jobDescription: z.string().min(1, { message: "Job description is required" })

  });

export type FormApplicationProps = {
    form: UseFormReturn<z.infer<typeof formSchema>>
}

export const ApplicationForm = () => {
   
    
      const [formsOpened, setFormsOpened] = useState<string[]>([AccordionForms.STUDENTS]);
      const form = useForm<z.infer<typeof formSchema>>({
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
    
      const { errors } = form.formState
    
      
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
    
      const onSubmitError = async () => {
        const isValid = await form.trigger();
        if (!isValid) {
          console.log("Form is invalid");
          // The useEffect above will handle updating the accordion state based on errors
        }
      };
    
      const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("Form submitted successfully:", values);
      };
    
      return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, onSubmitError)}>
              <Accordion type="multiple" value={formsOpened} onValueChange={setFormsOpened}>
                <StudentsInformation form={form}/>
                <WorksiteInformation form={form}/>
                <SupervisorInformation form={form}/>
                <ScheduleInformation form={form}/>
              </Accordion>
              <Button className="w-full lg:w-fit" type="submit">Submit</Button>
            </form>
        </Form>
      )
}