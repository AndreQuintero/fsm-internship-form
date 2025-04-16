type ListProps = {
    items: string[]
    scrollable?: boolean
}
export const List = ({ items, scrollable = false}: ListProps) => {
    return (
        <div className={`pr-2  ${scrollable ? "overflow-y-auto max-h-[200px] " : ""}`}>
            {items.map( item => (
                <div key={item} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {item}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}