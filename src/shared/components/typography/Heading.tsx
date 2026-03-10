import clsx from "clsx";

interface Props {
    children: React.ReactNode
    level?: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
}

export function Heading({ children, level = 1, className }: Props) {

    const Tag: React.ElementType = `h${level}`
    const sizeMap: Record<number, string> = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-md',
    }

    return (
        <Tag
            className={clsx(`font-black uppercase ${className}`, sizeMap[level])}
        >
            {children}
        </Tag>
    )
}
