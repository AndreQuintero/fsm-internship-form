'use client'
import { useAgreement } from "@/app/hooks/useAgreement";
import { AgreementFormData, formSchema, studentTermsAndConditions, supervisorTermsAndConditions } from "@/app/services/agreement";
import { disableDaysBeforeToday } from "@/app/services/application";
import { TermsAndConditions } from "@/components/layout/agreement/terms-conditions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignaturePad, SignaturePadRef } from "@/components/ui/signature-pad";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, LoaderPinwheel } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";


export const AgreementForm = () => {
    const studentSigRef = useRef<SignaturePadRef>(null);
    const supervisorSigRef = useRef<SignaturePadRef>(null);
    const form = useForm<AgreementFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           name: "",
           supervisorName: "",
           title:"",
           email: "",
           phone: "",
           organization: "",
           address: "",
           city: "",
           state: "",
           nation: "",
           zipCode: "",
           startDate: undefined,
           endDate: undefined,
           studentAgreement: false,
           supervisorAgreement: false
        },
    });
    const clearSignature = () => {
        studentSigRef.current?.clear();
        supervisorSigRef.current?.clear();  
    }
    const { onSubmit } = useAgreement(form, clearSignature)
    return (
        <Form {...form}>
            <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-8 mb-3.5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name of the Intern:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="supervisorName"
                        render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name of the Site Supervisor:</FormLabel>
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
                        name="email"
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
                        name="phone"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Organization/Church:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>City:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>State:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="nation"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nation:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Zip Code:</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                        <FormLabel>Internship Start date:</FormLabel>
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
                        <FormLabel>Internship End date:</FormLabel>
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
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2.5 justify-items-center">
                        <TermsAndConditions {...studentTermsAndConditions}>
                            <FormField
                                control={form.control}
                                name="studentAgreement"
                                render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center gap-2"> 
                                        <FormControl>
                                            <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className="cursor-pointer"> 
                                            I agree with the terms and conditions
                                            </FormLabel>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </TermsAndConditions>
                        <TermsAndConditions {...supervisorTermsAndConditions}>
                            <FormField
                                control={form.control}
                                name="supervisorAgreement"
                                render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center gap-2"> 
                                        <FormControl>
                                            <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className="cursor-pointer"> 
                                            I agree with the terms and conditions
                                            </FormLabel>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                        </TermsAndConditions>
                    </div>
                    <FormField
                        control={form.control}
                        name="studentSignature"
                        render={() => (
                        <FormItem>
                            <FormLabel>Student Signature:</FormLabel>
                            <FormControl>
                                <SignaturePad ref={studentSigRef} name="studentSignature" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="supervisorSignature"
                        render={() => (
                        <FormItem>
                            <FormLabel>Supervisor Signature:</FormLabel>
                            <FormControl>
                                <SignaturePad ref={supervisorSigRef} name="supervisorSignature" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    
                    
                </div>
                <Button className="w-full lg:w-fit" disabled={form.formState.isSubmitting} type="submit">{form.formState.isSubmitting ? (
                    <div className="flex items-center gap-2">
                        <LoaderPinwheel className="animate-spin h-4 w-4" />
                        <span>Submitting...</span>
                    </div>
                ) : "Submit" }</Button>
            </form>
        </Form>
    )
}