type RowProps = {
    children: React.ReactNode
    cols?: "1" | "2" | "3"
}
export const Row = ({ children, cols = "2" }: RowProps) => (
    <div className={`space-y-8 lg:space-y-0 lg:grid lg:grid-cols-${cols} lg:gap-4`}>
        {children}
    </div>
)