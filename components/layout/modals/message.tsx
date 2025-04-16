import { Button } from "@/components/ui/button"
import { LoaderPinwheel } from "lucide-react"

type MessageModalProps = {
    isLoading : boolean
    createLink: (event: React.MouseEvent) => void
}
export const MessageModal = ({ createLink, isLoading }: MessageModalProps) => {
    return (
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
    </>
)}