import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Copy } from "lucide-react"
import { toast } from "sonner"

type SuccessModalProps = {
    link: string
}
export const SuccessModal = ({ link }: SuccessModalProps) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(link)
            toast.success("Link copied!")
        } catch {
            toast.error("Error to copy the link")
        }
    }
    return (
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
                <Button onClick={copyToClipboard} type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    <Copy />
                </Button>
            </div>
            <p className='text-slate-400 text-sm'>This link will expire in 24 hours.</p>
        </>
    )
}
