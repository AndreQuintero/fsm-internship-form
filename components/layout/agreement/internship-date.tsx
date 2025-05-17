import { FormAgreementProps } from "@/app/services/agreement-form";
import { disableDaysBeforeToday } from "@/app/services/date";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { FormItemWrapper } from "@/components/ui/form-item-wrapper";
import { Row } from "@/components/ui/row";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export const InternshipDate = ({ form }: FormAgreementProps) => {
    return (
        <Row>
           <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                    <FormItemWrapper label="Internship Start Date:" message={<FormMessage />}>
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
                    <FormItemWrapper label="Internship End Date:" message={<FormMessage />}>
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
    )
}