import { AccordionTrigger } from "./accordion"

type AccordionTitleProps = {
    title: string
}
export const AccordionTitle = ({ title }: AccordionTitleProps) => {
  return (
    <AccordionTrigger>
        <div className="mt-3 mb-3">
            <h2 className="font-bold text-xl lg:text-3xl">{title}</h2>
        </div>
    </AccordionTrigger>
  )
}