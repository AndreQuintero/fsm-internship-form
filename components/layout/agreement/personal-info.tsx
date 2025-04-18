import { FormAgreementProps } from "@/app/services/agreement"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const PersonalInfo = ({ form }: FormAgreementProps) => {
    return (
        <>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Name of the Intern:</FormLabel>
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
                <FormLabel>Name of the Site Supervisor:</FormLabel>
                <FormControl>
                    <Input {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Title:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Phone:</FormLabel>
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Organization/Church:</FormLabel>
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