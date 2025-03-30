import Image from "next/image";
import { Container } from "../ui/container";
import { ReactNode } from "react";

type BaseTemplateProps = {
    title: string
    description?: string
    children: ReactNode
}

export const BaseTemplate = ({ title, description, children}: BaseTemplateProps) => (
     <Container>
        <section className="flex flex-col justify-center items-center mt-10 lg:mt-30 p-2.5">
            <Image src="/logo.png" alt="Fire School of Ministry" width={250} height={250} className=""/>
            <h1 className="font-bold text-4xl text-center lg:text-6xl">{title}</h1>
            {!!description && <p className="text-primary text-center mt-10">{description}</p>}
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                {children}
            </div>          
        </section>
    </Container>
)