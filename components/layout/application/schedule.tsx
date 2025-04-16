import { AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AccordionForms, FormApplicationProps } from "@/app/services/application";
import { DatePicker } from "@/components/ui/date-picker";
import { disableDaysBeforeToday } from "@/app/services/date";

export const ScheduleInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORK_SCHEDULE}>
            <AccordionTrigger>
            <div className="mt-3 mb-3">
                <h2 className="font-bold text-xl lg:text-3xl">Work Schedule</h2>
            </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="space-y-8">
                <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Start date:</FormLabel>
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
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>End date:</FormLabel>
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
                    <FormMessage />
                    </FormItem>
                )}
                />
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