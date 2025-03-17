import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
} 
export const Container = ({ children }: ContainerProps) => (
    <section className="max-w-screen-2xl ml-auto mr-auto">
        {children}
    </section>
)