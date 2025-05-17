import { FormAgreementProps } from "@/app/services/agreement-form"
import { FormDescription, FormField, FormMessage } from "@/components/ui/form"
import { FormItemWrapper } from "@/components/ui/form-item-wrapper"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"
import { Row } from "@/components/ui/row"

export const PersonalInfo = ({ form }: FormAgreementProps) => {
    return (
        <>
            <Row cols="3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItemWrapper label="Name of the Intern:" message={<FormMessage />}>
                            <Input {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField
                    control={form.control}
                    name="supervisorName"
                    render={({ field }) => (
                        <FormItemWrapper label="Name of the Site Supervisor:" message={<FormMessage />}>
                            <Input {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItemWrapper label="Title:" message={<FormMessage />}>
                            <Input {...field} />
                        </FormItemWrapper>
                    )}
                />
            </Row>
            <Row>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItemWrapper label="Email:" message={<FormMessage />}>
                            <Input {...field} />
                        </FormItemWrapper>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItemWrapper label="Phone:" 
                            message={
                                <>
                                    <FormDescription>
                                        Include country code (e.g. +44)
                                    </FormDescription>
                                    <FormMessage />
                                </>
                            }>
                                <PhoneInput
                                    {...field}
                                    value={field.value}
                                    placeholder="Enter your number"
                                />
                        </FormItemWrapper>
                    )}
                />
            </Row>
            <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                <FormItemWrapper label="Organization/Church:" message={<FormMessage />}>
                    <Input {...field} />
                </FormItemWrapper>
                )}
            />
        </>
    )
}