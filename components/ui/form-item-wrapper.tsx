import { FormControl, FormItem, FormLabel } from "./form";

type FormItemWrapperProps = { 
    label: string, 
    children: React.ReactNode, 
    message?: React.ReactNode 
}

export const FormItemWrapper = ({ label, children, message }:FormItemWrapperProps) => (
    <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <FormControl>
            {children}
        </FormControl>
        <div>{message}</div>
    </FormItem>
);