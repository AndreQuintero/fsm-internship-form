import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

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
  }).refine(data => data.startDate < data.endDate, {
    message: "End date must be after start date",
    path: ["endDate"]
  }).refine(data => data.endDate > data.startDate, {
    message: "Start date must be before end date",
    path: ["startDate"]
  });

export type ApplicationFormData = z.infer<typeof formSchema>

export type FormApplicationProps = {
    form: UseFormReturn<ApplicationFormData>
}


export const disableDaysBeforeToday = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today to midnight
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0); // Normalize the input date to midnight
  return normalizedDate < today; // Disable only past dates (not today)
}