import { useAgreement } from "@/app/hooks/useAgreement"
import { FormAgreementProps } from "@/app/services/agreement"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"
import { MessageModal } from '../modals/message';
import { SuccessModal } from '../modals/success';
import { ErrorModal } from '../modals/error';

enum GenerateLinkState {
    INITIAL = "INITIAL",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}
export const GenerateLink = ({ form }: FormAgreementProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const [generateState, setGenerateState] = useState<GenerateLinkState>(GenerateLinkState.INITIAL)
    const [link, setLink] = useState('')
    const { generateLink } = useAgreement(form)
    
    const handleClose = (open: boolean) => {
        if(!open && generateState === GenerateLinkState.FAILED) {
            setGenerateState(GenerateLinkState.INITIAL)
            setLink('')
        }
    }
    const createLink = async (event: React.MouseEvent) => {
        event.preventDefault()
        setIsLoading(true)
        try {
            const response = await generateLink(form.getValues())
            if (response?.success) {
                setLink(response.link)
                setGenerateState(GenerateLinkState.SUCCESS)
            } else {
                setGenerateState(GenerateLinkState.FAILED)
            }
        } catch {
            toast.error("An error occurred while generating the link")
            setGenerateState(GenerateLinkState.FAILED)
        } finally {
            setIsLoading(false)
        }
    }

    const displayMessage = (linkState: GenerateLinkState, link: string, loading: boolean) => {
        const messages = {
            [GenerateLinkState.INITIAL]: () => <MessageModal createLink={createLink} isLoading={loading}/>,
            [GenerateLinkState.SUCCESS]: () => <SuccessModal link={link}/>,
            [GenerateLinkState.FAILED]: () => <ErrorModal />
        }

        return messages[linkState]()
    }
    return (
        <Dialog onOpenChange={handleClose}>
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
                    {displayMessage(generateState, link, isLoading)}
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