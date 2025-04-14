import { useAgreement } from "@/app/hooks/useAgreement"
import { FormAgreementProps } from "@/app/services/agreement"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export const GenerateLink = ({ form }: FormAgreementProps) => {
    const { generateLink } = useAgreement(form)
    const createLink = async (event: React.MouseEvent) => {
        event.preventDefault()
        await generateLink(form.getValues())
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button type="button" className={`w-full lg:w-fit ${buttonVariants({ variant: 'secondary' })}`}> Generate a link </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>
                    Save your form and send the link to your supervisor.
                </DialogDescription>
                </DialogHeader>
                <div className="flex items-center flex-col space-y-2">
                <div className="grid flex-1 gap-2">
                    <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />You can also generate a link with your information saved.</p>
                    <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />Save the form for you to be able to fill all the information.</p>
                    <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />You can share the link with your supervisor for them to be able to sign the form.</p>
                    <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />Submit the form with both signatures.</p>
                    <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />The link will expire in 24 hours.</p>
                </div>
                <div className="flex justify-center mt-4">
                <Button className="w-full lg:w-fit" onClick={createLink} type="button">Generate the link</Button>
                </div>
                </div>
                <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                    Close
                    </Button>
                </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}