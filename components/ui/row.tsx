type RowProps = {
    children: React.ReactNode
    cols?: "1" | "2" | "3"
}

const gridCols = {
    "1": "lg:grid-cols-1",
    "2": "lg:grid-cols-2",
    "3": "lg:grid-cols-3",
}

export const Row = ({ children, cols = "2" }: RowProps) => (
    <div className={`space-y-8 lg:space-y-0 lg:grid ${gridCols[cols]} lg:gap-4`}>
        {children}
    </div>
)