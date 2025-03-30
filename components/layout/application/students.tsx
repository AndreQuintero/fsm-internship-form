import { AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AccordionForms, FormApplicationProps } from "@/app/services/application";
import { DatePicker } from "@/components/ui/date-picker";




export const StudentsInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.STUDENTS}>
            <AccordionTrigger>
            <div className="mt-3 mb-3">
                <h2 className="font-bold text-xl lg:text-3xl">Students Information</h2>
            </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="space-y-8">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormDescription>Insert your full name here.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
              
                <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth:</FormLabel>
                    <DatePicker date={field.value} onChange={field.onChange} pickMonthYear endYear={new Date().getFullYear()}>
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
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormDescription>Insert your email here.</FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            </AccordionContent>
        </AccordionItem>
    )
}