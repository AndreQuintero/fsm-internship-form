import { AccordionForms, FormApplicationProps } from "@/app/services/application-form";
import { AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { AccordionTitle } from "@/components/ui/accordion-title";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const WorksiteInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORKSITE}>
            <AccordionTitle title="Worksite Information"/>
            <AccordionContent>
            <div className="space-y-8">
                <FormField 
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Church/Organization name:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="webpage"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Website/Facebook page:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="streetLine1"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Street Line 1:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="streetLine2"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Street Line 2:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField 
                control={form.control}
                name="streetLine3"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Street Line 3:</FormLabel>
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
                        <CountryDropdown
                            placeholder="Select a country"
                            defaultValue={field.value}
                            onChange={(country) => {
                                field.onChange(`${country.emoji ?? ""} ${country.name}`)
                            }}
                        />
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Zip code:</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            </AccordionContent>
        </AccordionItem>
    )
}