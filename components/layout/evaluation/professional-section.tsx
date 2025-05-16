import { AccordionContent, AccordionItem } from "@/components/ui/accordion"
import { AccordionTitle } from "@/components/ui/accordion-title"
import { RadioFieldGroup } from "./radio-field-group"
import { AccordionForms, FormEvaluationProps } from "@/app/services/evaluation-form"

export const ProfessionalSection = ({ form }: FormEvaluationProps) => {
    return (
        <AccordionItem value={AccordionForms.PROFESSIONAL}>
            <AccordionTitle title="Professional & Leadership Skill"/>
            <AccordionContent className="space-y-7">
                <RadioFieldGroup 
                    name="maintainsProfessionalism"
                    form={form} 
                    label="Maintains professionalism during outreach programs, 
                        evangelism events, and ministry-related activities."
                />
                <RadioFieldGroup 
                    name="effectiveCoaching"
                    form={form} 
                    label="Demonstrates effective coaching, mentoring, and discipleship skills."
                />
                <RadioFieldGroup 
                    name="balanceMinistries"
                    form={form} 
                    label="Balances ministry responsibilities while maintaining a healthy spiritual life."
                />
                <RadioFieldGroup 
                    name="appreciationForFSM"
                    form={form} 
                    label="Demonstrates an understanding and appreciation for Fire School Ministry’s mission, policies, and values."
                />
                <RadioFieldGroup 
                    name="doesResponsabilities"
                    form={form} 
                    label="Does responsibilities promptly and efficiently."
                />
                <RadioFieldGroup 
                    name="professionalismInAttitude"
                    form={form} 
                    label="Maintains professionalism in attitude, attire, 
                    language, and interactions with others."
                />
                <RadioFieldGroup 
                    name="understandsDifferences"
                    form={form} 
                    label="Understands the difference between pastoral care, coaching, 
                    and providing spiritual guidance, referring individuals to appropriate leaders when needed."
                />
                <RadioFieldGroup 
                    name="managesTime"
                    form={form} 
                    label="Manages time effectively, actively participating in meetings, 
                        ministry activities, and training sessions."
                />
            </AccordionContent>
        </AccordionItem>
    )
}