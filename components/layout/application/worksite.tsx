import { AccordionForms, FormApplicationProps } from "@/components/template/application/form";
import { AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const WorksiteInformation = ({ form }: FormApplicationProps) => {
    return (
        <AccordionItem value={AccordionForms.WORKSITE}>
            <AccordionTrigger>
            <div className="mt-3 mb-3">
                <h2 className="font-bold text-xl lg:text-3xl">Worksite Information</h2>
            </div>
            </AccordionTrigger>
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
                    <FormDescription>
                        Insert your Church/Organization name here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your Website/Facebook page here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your Street Line 1 here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your Street Line 2 here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your Street Line 3 here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your City here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your state here.
                    </FormDescription>
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
                    <FormControl>
                        <Input {...field} />
                    </FormControl>
                    <FormDescription>
                        Insert your nation here.
                    </FormDescription>
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
                    <FormDescription>
                        Insert your zip code here.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            </AccordionContent>
        </AccordionItem>
    )
}