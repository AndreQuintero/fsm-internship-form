import { FormAgreementProps } from "@/app/services/agreement-form";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { FormField, FormMessage } from "@/components/ui/form";
import { FormItemWrapper } from "@/components/ui/form-item-wrapper";
import { Input } from "@/components/ui/input";
import { Row } from "@/components/ui/row";

export const Address = ({ form }: FormAgreementProps) => {
    return (
        <>
            <Row cols="3">
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItemWrapper label="Address:" message={<FormMessage />}>
                            <Input {...field} />
                        </FormItemWrapper>
                    )}
                />
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
        </>
    )
}