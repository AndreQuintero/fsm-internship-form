import { convertHoursToDays } from "@/app/services/date"
import { ButtonWithLoading } from "@/components/ui/buttonWithLoading"
import { List } from "@/components/ui/list"

type MessageModalProps = {
    isLoading : boolean
    createLink: (event: React.MouseEvent) => void
}
export const MessageModal = ({ createLink, isLoading }: MessageModalProps) => {
    const infos = [
        "You can also generate a link with your information saved.",
        "Save the form for you to be able to fill all the information.",
        "You can share the link with your supervisor for them to be able to sign the form.",
        "Submit the form with both signatures.",
        `The link will expire in ${convertHoursToDays(Number(process.env.NEXT_PUBLIC_EXPIRATION_TIME!))} day(s).`
    ]
    return (
    <>
        <div className="mb-6">
            <List items={infos}/>
        </div>
        <div className="flex justify-center mt-2">
            <ButtonWithLoading disabled={isLoading} onClick={createLink} isLoading={isLoading} loadingText="Generating Link..." text="Generate Link"/>
        </div>
    </>
)}