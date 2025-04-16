import { type VariantProps } from "class-variance-authority"
import { Button, buttonVariants } from "./button"
import { LoaderPinwheel } from "lucide-react"

type ButtonWithLoadingProps = React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    } & {
        isLoading: boolean,
        loadingText: string,
        text: string

    }

export const ButtonWithLoading = ({ isLoading, loadingText, text ,...props }: ButtonWithLoadingProps) => {
    return (
        <Button className="w-full lg:w-fit" {...props}> {isLoading ? (
            <div className="flex items-center gap-2">
                <LoaderPinwheel className="animate-spin h-4 w-4" />
                <span>{loadingText}</span>
            </div>
        ) : text }</Button>
    )
}