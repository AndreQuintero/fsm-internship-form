import { AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AccordionForms, FormApplicationProps } from "@/app/services/application-form";
import { DatePicker } from "@/components/ui/date-picker";
import { disableDaysBeforeToday } from "@/app/services/date";
import { AccordionTitle } from "@/components/ui/accordion-title";
import { Row } from "@/components/ui/row";
import { FormItemWrapper } from "@/components/ui/form-item-wrapper";

export const ScheduleInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORK_SCHEDULE}>
            <AccordionTitle title="Work Schedule"/>
            <AccordionContent>
            <div className="space-y-4">
                <Row>
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItemWrapper label="Start Date:" message={<FormMessage />}>
                                <DatePicker date={field.value} onChange={field.onChange} onDisable={disableDaysBeforeToday}>
                                    <FormControl>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </DatePicker>
                            </FormItemWrapper>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                            <FormItemWrapper label="End Date:" message={<FormMessage />}>
                                <DatePicker date={field.value} onChange={field.onChange} onDisable={disableDaysBeforeToday}>
                                    <FormControl>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                        )}
                                        >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </DatePicker>
                            </FormItemWrapper>
                        )}
                    />
                </Row>
                <FormField 
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Primary Responsabilities<span className="text-slate-400">(at least 3 pointers)</span>:</FormLabel>
                    <FormControl>
                        <Textarea className="resize-none" {...field}/>
                    </FormControl>
                    <FormDescription>
                        (Ex: Help in the children&apos;s ministry)
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