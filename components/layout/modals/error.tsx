import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const ErrorModal = () => (
    <>
        <div className='flex items-center justify-center flex-wrap flex-col w-[150] h-[150]'>
            <DotLottieReact
                src="/assets/error.lottie"
                autoplay
            />
        </div>
        <h3 className='text-2xl font-bold'>Something went wrong, try it again later.</h3>
    </>
)