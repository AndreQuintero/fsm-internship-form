import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "@/components/ui/list"
import { ReactNode } from "react"

export type AgreementTermsCardProps = {
    title: string
    terms: string []
    children: ReactNode
}

export const TermsAndConditions = ({children, terms = [], title}: AgreementTermsCardProps) => {
    return (
        <Card className="w-full max-w-[380px] lg:max-w-none">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <List items={terms} scrollable/>
            </CardContent>
            <CardFooter>
                {children}                
            </CardFooter>
        </Card>
    )
}