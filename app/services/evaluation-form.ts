import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export enum EvaluationValues {
    EXCELLENT = "Excellent", 
    SATISFACTORY = "Satisfactory", 
    UNSATISFACTORY = "Unsatisfactory", 
    NOT_APPLICABLE = "Not Applicable"
} 

const requiredEvaluation = z
  .string()
  .refine(
    (val) =>
      Object.values(EvaluationValues).includes(val as EvaluationValues),
    { message: "Please select a valid option" }
  );
export const formSchema = z.object({
    name:  z.string().min(1, { message: "Name is required" }),
    supervisorName:  z.string().min(1, { message: "Supervisor's name is required" }),
    supervisorEmail: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
    supervisorPhone:  z.string().optional(),
    spiritualMaturity: requiredEvaluation,
    meaningfulRelationships: requiredEvaluation,
    demonstratesEmpathy: requiredEvaluation,
    prayers: requiredEvaluation,
    respondstoChallenges: requiredEvaluation,
    demonstratesRespect: requiredEvaluation,
    effectiveCommunications: requiredEvaluation,
    listeningSkills: requiredEvaluation,
    maintainsProfessionalism: requiredEvaluation,
    effectiveCoaching: requiredEvaluation,
    balanceMinistries: requiredEvaluation,
    appreciationForFSM: requiredEvaluation,
    doesResponsabilities: requiredEvaluation,
    professionalismInAttitude: requiredEvaluation,
    understandsDifferences: requiredEvaluation,
    managesTime: requiredEvaluation,
    meetSupervisor: requiredEvaluation,
    acceptfeedback: requiredEvaluation,
    openessToSpiritualGrowth: requiredEvaluation,
    takesInitiative: requiredEvaluation,
})

export type EvaluationFormData = z.infer<typeof formSchema>

export enum AccordionForms {
    SPIRITUAL = "SPIRITUAL",
    PROFESSIONAL = "PROFESSIONAL",
    SUPERVISION = "SUPERVISION",
}

export const DEFAULT_VALUES: EvaluationFormData = {
    name: "",
    supervisorName: "",
    supervisorEmail: "",
    supervisorPhone: "",
    spiritualMaturity: "",
    meaningfulRelationships: "",
    demonstratesEmpathy: "",
    prayers: "",
    respondstoChallenges: "",
    demonstratesRespect: "",
    effectiveCommunications: "",
    listeningSkills: "",
    maintainsProfessionalism: "",
    effectiveCoaching: "",
    balanceMinistries: "",
    appreciationForFSM: "",
    doesResponsabilities: "",
    professionalismInAttitude: "",
    understandsDifferences: "",
    managesTime: "",
    meetSupervisor: "",
    acceptfeedback: "",
    openessToSpiritualGrowth: "",
    takesInitiative: "",
}

export type FormEvaluationProps = {
    form: UseFormReturn<EvaluationFormData>
}

export const evaluationAccordionErrorMapping: Record<
    AccordionForms,
    (keyof EvaluationFormData)[]> = {
    [AccordionForms.SPIRITUAL]: [
        "spiritualMaturity",
        "meaningfulRelationships",
        "demonstratesEmpathy",
        "prayers",
        "respondstoChallenges",
        "demonstratesRespect",
        "effectiveCommunications",
        "listeningSkills"
    ],
    [AccordionForms.PROFESSIONAL]: [
        "maintainsProfessionalism",
        "effectiveCoaching",
        "balanceMinistries",
        "appreciationForFSM",
        "doesResponsabilities",
        "professionalismInAttitude",
        "understandsDifferences",
        "managesTime"
    ],
    [AccordionForms.SUPERVISION]: [
        "meetSupervisor",
        "acceptfeedback",
        "openessToSpiritualGrowth",
        "takesInitiative"
    ]
}