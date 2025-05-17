import { AccordionForms, FormApplicationProps } from "@/app/services/application-form";
import { AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { AccordionTitle } from "@/components/ui/accordion-title";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

export const SupervisorInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORKSITE_SUPERVISOR}>
            <AccordionTitle title="Worksite Supervisor Contact"/>
            <AccordionContent>
            <div className="space-y-8">
                <FormField 
                control={form.control}
                name="supervisorName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="supervisorEmail"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={form.control}
                    name="supervisorPhone"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone:</FormLabel>
                        <FormControl>
                        <PhoneInput
                            {...field}
                            value={field.value}
                            placeholder="Enter your number"
                        
                        />
                        </FormControl>
                        <FormDescription>
                        Include country code (e.g. +44)
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
            </AccordionContent>
        </AccordionItem>
    )
}