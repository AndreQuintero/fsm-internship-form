import { FormAgreementProps, studentTermsAndConditions, supervisorTermsAndConditions } from "@/app/services/agreement-form";
import { TermsAndConditions } from "./terms-conditions";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export const TermsSection = ({ form }: FormAgreementProps) => {
    return (
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
    )
}