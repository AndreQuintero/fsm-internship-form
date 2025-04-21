import { AgreementTermsCardProps } from "@/components/layout/agreement/terms-conditions";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
    name:  z.string().min(1, { message: "Name is required" }),
    supervisorName:  z.string().min(1, { message: "Supervisor's name is required" }),
    title:  z.string().min(1, { message: "Title is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email address" }),
    phone:  z.string().min(1, { message: "Phone number is required" }),
    organization: z.string().min(1, { message: "Organization/church is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "City name is required" }),
    state: z.string().min(1, { message: "State name is required" }),
    nation: z.string().min(1, { message: "Nation name is required" }),
    zipCode: z.string().min(1, { message: "Zip code is required" }),
    startDate: z.date({ required_error: "Start Date is required" }),
    endDate: z.date({ required_error: "End Date is required" }),
    supervisorAgreement: z.literal<boolean>(true, {
        errorMap: () => ({message: "You must accept the terms ands conditions"})
    }),
    studentAgreement: z.literal<boolean>(true, {
        errorMap: () => ({message: "You must accept the terms ands conditions"})
    }),
    studentSignature: z.string().min(1, { message: "Student Signature is required" }),
    supervisorSignature: z.string().min(1, { message: "Supervisor signature is required" })
}).refine(data => data.startDate < data.endDate, {
    message: "End date must be after start date",
    path: ["endDate"]
  }).refine(data => data.endDate > data.startDate, {
    message: "Start date must be before end date",
    path: ["startDate"]
  });

export type AgreementFormData = z.infer<typeof formSchema>
  
export type FormAgreementProps = {
      form: UseFormReturn<AgreementFormData>
}

export const studentTermsAndConditions: Omit<AgreementTermsCardProps, 'children'> = {
    title: "The Internship Student agrees to the following:",
    terms: [
        "Serve your Internship Supervisor and host ministry with excellence.",
        "Have a proactive attitude and be willing to take on assignments and responsibilities.",
        "Be punctual and faithful in fulfilling your responsibilities.",
        "Maintain clear communication with your Internship Coordinator throughout the program.",
        "Reach out for help or to address any issues that arise during the internship.",
        "Complete all assignments as outlined in the Grading and Assignments section.",
        "Be open and willing to experience various opportunities and activities at the site.",
        "Adhere to and support the confidentiality standards of the site.",
        "Adhere to the administrative policies, rules, standards, schedules, and practices of the site.",
        "Seek assistance from the Internship Coordinator if any issues arise that affect your field experience.",
        "Be open to and embrace working with diverse colleagues and clients.",
        "Model positive interpersonal behaviors in working with peers, supervisors, and clients.",
        "Be punctual and present on days scheduled to be on-site."
    ]
}

export const supervisorTermsAndConditions: Omit<AgreementTermsCardProps, 'children'> = {
    title: "The Internship Site Supervisor agrees to the following:",
    terms: [
        "Be a mature and spiritually grounded leader, providing guidance and mentorship to the intern.",
        "Ensure that the ministry assignments and responsibilities align with the internship goals.",
        "Meet with the intern an average of one hour per week to pray, evaluate progress, provide feedback, and offer support.",
        "Communicate with the Internship Coordinator if any issues arise with the intern or the internship process.",
        "Provide the student an opportunity to work in a professional ministry environment and model positive interpersonal behaviors that enhance the supervisory process.",
        "Respect and foster the individuality of the student and their professional style.",
        "Help the student work with diverse individuals and/or groups in ministry settings.",
        "Provide necessary and appropriate technology to assist the student’s learning.",
        "Complete the midterm and final evaluation of the student."
    ]
}

export const DEFAULT_VALUES = {
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
    supervisorAgreement: false,
    studentSignature: "",
    supervisorSignature: ""
} as const