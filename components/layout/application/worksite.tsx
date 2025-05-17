import { AccordionForms, FormApplicationProps } from "@/app/services/application-form";
import { AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { AccordionTitle } from "@/components/ui/accordion-title";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { FormField, FormMessage } from "@/components/ui/form";
import { FormItemWrapper } from "@/components/ui/form-item-wrapper";
import { Input } from "@/components/ui/input";
import { Row } from "@/components/ui/row";

export const WorksiteInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORKSITE}>
            <AccordionTitle title="Worksite Information"/>
            <AccordionContent>
            <div className="space-y-4">
                <Row>
                    <FormField 
                        control={form.control}
                        name="organizationName"
                        render={({ field }) => (
                            <FormItemWrapper label="Church/Organization name:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>       
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="webpage"
                        render={({ field }) => (
                            <FormItemWrapper label="Website/Facebook page:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                </Row>
                <Row cols="3">
                    <FormField 
                        control={form.control}
                        name="streetLine1"
                        render={({ field }) => (
                            <FormItemWrapper label="Street Line 1:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="streetLine2"
                        render={({ field }) => (
                            <FormItemWrapper label="Street Line 2:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="streetLine3"
                        render={({ field }) => (
                            <FormItemWrapper label="Street Line 3:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                </Row>
                <Row>
                    <FormField 
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItemWrapper label="City:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItemWrapper label="State:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                </Row>
                <Row>
                    <FormField
                        control={form.control}
                        name="nation"
                        render={({ field }) => (
                            <FormItemWrapper label="Nation:" message={<FormMessage />}>
                                <CountryDropdown
                                    placeholder="Select a country"
                                    defaultValue={field.value}
                                    onChange={(country) => {
                                        field.onChange(`${country.emoji ?? ""} ${country.name}`)
                                    }}
                                />
                            </FormItemWrapper>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                            <FormItemWrapper label="Zip Code:" message={<FormMessage />}>
                                <Input {...field} />
                            </FormItemWrapper>
                        )}
                    />
                </Row>
            </div>
            </AccordionContent>
        </AccordionItem>
    )
}