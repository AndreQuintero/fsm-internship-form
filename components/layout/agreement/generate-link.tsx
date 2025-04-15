import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useAgreement } from "@/app/hooks/useAgreement"
import { FormAgreementProps } from "@/app/services/agreement"
import { Button, buttonVariants } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Copy, LoaderPinwheel } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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
                {generateState === GenerateLinkState.INITIAL && (
                <>
                    <div className="grid flex-1 gap-2">
                        <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />You can also generate a link with your information saved.</p>
                        <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />Save the form for you to be able to fill all the information.</p>
                        <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />You can share the link with your supervisor for them to be able to sign the form.</p>
                        <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />Submit the form with both signatures.</p>
                        <p className="flex gap-1"> <span className="flex h-2 w-2  translate-y-3 rounded-full bg-sky-500" />The link will expire in 24 hours.</p>
                    </div>
                    <div className="flex justify-center mt-4">
                    <Button className="w-full lg:w-fit" disabled={isLoading} onClick={createLink}>{isLoading ? (
                            <div className="flex items-center gap-2">
                                <LoaderPinwheel className="animate-spin h-4 w-4" />
                                <span>Generating link...</span>
                            </div>
                        ) : "Generate the link" }</Button>
                    </div>
                </>)}
                {generateState === GenerateLinkState.SUCCESS && (
                    <>
                    <div className='flex items-center justify-center flex-wrap flex-col w-[150] h-[150]'>
                        <DotLottieReact
                            src="/assets/success.lottie"
                            autoplay
                        />
                    </div>
                    <h3 className='text-2xl font-bold'>This is your new link!</h3>
                    <div className="flex items-center space-x-2">
                        <div className="flex gap-6">
                            <Label htmlFor="link" className="sr-only">
                            Link
                            </Label>
                            <Input
                            id="link"
                            defaultValue={link}
                            readOnly
                            />
                        </div>
                        <Button type="submit" size="sm" className="px-3">
                            <span className="sr-only">Copy</span>
                            <Copy />
                        </Button>
                    </div>
                    <p className='text-slate-400 text-sm'>This link will expire in 24 hours.</p>
                    </>
                )}
                {generateState === GenerateLinkState.FAILED && (
                    <>
                    <div className='flex items-center justify-center flex-wrap flex-col w-[150] h-[150]'>
                        <DotLottieReact
                            src="/assets/error.lottie"
                            autoplay
                        />
                    </div>
                    <h3 className='text-2xl font-bold'>Something went wrong, try it again later.</h3>
                    </>
                )}
                
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