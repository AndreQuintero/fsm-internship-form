import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
                <div className="max-h-[200px] overflow-y-auto pr-2"> {/* Adjust max-height as needed */}
                    {terms.map( term => (
                        <div key={term} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {term}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                {children}                
            </CardFooter>
        </Card>
    )
}