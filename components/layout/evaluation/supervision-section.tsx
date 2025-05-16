import { AccordionForms, FormEvaluationProps } from "@/app/services/evaluation-form";
import { AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { AccordionTitle } from "@/components/ui/accordion-title";
import { RadioFieldGroup } from "./radio-field-group";

export const SupervisionSection = ({ form }: FormEvaluationProps) => {
    return (
        <AccordionItem value={AccordionForms.SUPERVISION}>
            <AccordionTitle title="Supervision & Growth"/>
            <AccordionContent className="space-y-7">
                <RadioFieldGroup 
                    name="meetSupervisor"
                    form={form} 
                    label="Meets regularly with the assigned supervisor for mentorship, prayer, and guidance."
                />
                <RadioFieldGroup 
                    name="acceptfeedback"
                    form={form} 
                    label="Accepts constructive feedback with humility and applies it for personal and ministry growth."
                />
                <RadioFieldGroup 
                    name="openessToSpiritualGrowth"
                    form={form} 
                    label="Demonstrates openness to spiritual growth, correction, and deeper learning in ministry."
                />
                <RadioFieldGroup 
                    name="takesInitiative"
                    form={form} 
                    label="Takes initiative, demonstrates creativity, and actively contributes to growth and impact."
                />
            </AccordionContent>
        </AccordionItem>
    )
}