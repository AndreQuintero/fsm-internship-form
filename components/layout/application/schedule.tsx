import { AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AccordionForms, disableDaysBeforeToday, FormApplicationProps } from "@/app/services/application";
import { DatePicker } from "@/components/ui/date-picker";

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
                    <FormDescription>Insert Your start date here.</FormDescription>
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
                    <FormDescription>Insert Your end date here.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Job description <span className="text-slate-400">(at least 3 pointers)</span>:</FormLabel>
                    <FormControl>
                        <Textarea className="resize-none" {...field}/>
                    </FormControl>
                    <FormDescription>
                        Insert your job description here.
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