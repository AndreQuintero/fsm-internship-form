import { FormEvaluationProps } from "@/app/services/evaluation-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"

export const Personal = ({ form }: FormEvaluationProps) => {
  return (
    <div className="space-y-8">
        <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Student Name:</FormLabel>
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
                    <FormLabel>Site Supervisor Name:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="supervisorEmail"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Site Supervisor Email:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
       <FormField
            control={form.control}
            name="supervisorPhone"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Site Supervisor Phone Number:</FormLabel>
                <FormControl>
                <PhoneInput
                    {...field}
                    value={field.value}
                    placeholder="Enter your number"
                
                />
                </FormControl>
                <FormDescription>
                Include country code (e.g. +44)
                </FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />
    </div>
  )
}