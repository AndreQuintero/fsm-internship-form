import { FormEvaluationProps } from "@/app/services/evaluation-form"
import { FormDescription, FormField, FormMessage } from "@/components/ui/form"
import { FormItemWrapper } from "@/components/ui/form-item-wrapper"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"
import { Row } from "@/components/ui/row"

export const Personal = ({ form }: FormEvaluationProps) => {
  return (
    <div className="space-y-4">
        <Row>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItemWrapper label="Student name:" message={<FormMessage />}>
                            <Input {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField
                control={form.control}
                name="supervisorName"
                render={({ field }) => (
                    <FormItemWrapper label="Site Supervisor Name:" message={<FormMessage />}>
                            <Input {...field} />
                    </FormItemWrapper>
                )}
            />
        </Row>
        <Row>
            <FormField
                control={form.control}
                name="supervisorEmail"
                render={({ field }) => (
                    <FormItemWrapper label="Site Supervisor Email:" message={<FormMessage />}>
                        <Input {...field} />
                    </FormItemWrapper>
                )}
            />
            <FormField
                control={form.control}
                name="supervisorPhone"
                render={({ field }) => (
                    <FormItemWrapper label="Site Supervisor Phone Number:" 
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
    </div>
  )
}