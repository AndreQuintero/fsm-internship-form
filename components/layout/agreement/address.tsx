import { FormAgreementProps } from "@/app/services/agreement-form";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const Address = ({ form }: FormAgreementProps) => {
    return (
        <>
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
                    <FormLabel>Zip Code:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </>
    )
}