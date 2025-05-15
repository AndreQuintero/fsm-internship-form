import { EvaluationFormData, EvaluationValues } from "@/app/services/evaluation-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";

type RadioGroupProps = {
    form: UseFormReturn<EvaluationFormData>;
    label: string,
    name: (keyof EvaluationFormData)
}
export const RadioFieldGroup = ({ form, label, name }: RadioGroupProps) => {
  return (
    <FormField
        control={form.control}
        name="spiritualMaturity"
        render={({ field }) => (
            <FormItem className="space-y-3">
                <FormLabel className="text-lg text-primary">{label}</FormLabel>
                <FormControl>
                    <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-3.5"
                    >
                        { Object.values(EvaluationValues).map( value => (
                            <FormItem key={`${name}-${value}`} className="flex items-center">
                                <FormControl>
                                    <RadioGroupItem value={value} />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    {value}
                                </FormLabel>
                            </FormItem> 
                        ))}
                    </RadioGroup>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
  )
}