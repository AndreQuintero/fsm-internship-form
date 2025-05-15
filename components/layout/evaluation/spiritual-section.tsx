import { AccordionForms, FormEvaluationProps } from "@/app/services/evaluation-form"
import { AccordionContent, AccordionItem } from "@/components/ui/accordion"
import { AccordionTitle } from "@/components/ui/accordion-title"
import { RadioFieldGroup } from "./radio-field-group"

export const SpiritualSection = ({ form }: FormEvaluationProps) => {
    return (
        <AccordionItem value={AccordionForms.SPIRITUAL}>
            <AccordionTitle title="Spiritual & Ministry Development"/>
            <AccordionContent className="space-y-7">
                <RadioFieldGroup 
                    name="spiritualMaturity"
                    form={form} 
                    label="Demonstrates spiritual maturity by modeling Christ-like character in ministry settings."
                />
                <RadioFieldGroup 
                    name="meaningfulRelationships"
                    form={form} 
                    label="Builds meaningful relationships with ministry leaders, peers, and community members."
                />
                <RadioFieldGroup 
                    name="demonstratesEmpathy"
                    form={form} 
                    label="Consistently demonstrates empathy and responds 
                        with compassion during ministry interactions."
                />
                <RadioFieldGroup 
                    name="prayers"
                    form={form} 
                    label="Prays with and for individuals, incorporating spiritual guidance into conversations."
                />
                <RadioFieldGroup 
                    name="respondstoChallenges"
                    form={form} 
                    label="Responds to challenges in ministry with integrity, wisdom, and reliance on the Holy Spirit."
                />
                <RadioFieldGroup 
                    name="demonstratesRespect"
                    form={form} 
                    label="Demonstrates respect, acceptance, and care for individuals from diverse backgrounds."
                />
                <RadioFieldGroup 
                    name="effectiveCommunications"
                    form={form} 
                    label="Exhibits effective nonverbal communication skills, 
                        such as appropriate body language, voice tone, and posture."
                />
                <RadioFieldGroup 
                    name="listeningSkills"
                    form={form} 
                    label="Reflects active listening skills through paraphrasing, 
                        summarizing, and responding thoughtfully in conversations."
                />
            </AccordionContent>
        </AccordionItem>
    )
}