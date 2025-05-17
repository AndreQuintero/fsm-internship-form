import { AccordionForms, FormApplicationProps } from "@/app/services/application-form";
import { AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { AccordionTitle } from "@/components/ui/accordion-title";
import { FormDescription, FormField, FormMessage } from "@/components/ui/form";
import { FormItemWrapper } from "@/components/ui/form-item-wrapper";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Row } from "@/components/ui/row";

export const SupervisorInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORKSITE_SUPERVISOR}>
            <AccordionTitle title="Worksite Supervisor Contact"/>
            <AccordionContent>
            <div className="space-y-4">
                <Row>
                    <FormField 
                        control={form.control}
                        name="supervisorName"
                        render={({ field }) => (
                            <FormItemWrapper label="Full Name:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItemWrapper label="Title:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                </Row>
                <Row>
                    <FormField 
                        control={form.control}
                        name="supervisorEmail"
                        render={({ field }) => (
                            <FormItemWrapper label="Email:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="supervisorPhone"
                        render={({ field }) => (
                            <FormItemWrapper label="Phone:" 
                                message={
                                    <>
                                        <FormDescription>
                                            Include country code (e.g. +44)
                                        </FormDescription>
                                        <FormMessage />
                                    </>
                                }>
                                    <PhoneInput
                                        {...field}
                                        value={field.value}
                                        placeholder="Enter your number"
                                    />
                            </FormItemWrapper>
                        )}
                    />
                </Row>
            </div>
            </AccordionContent>
        </AccordionItem>
    )
}