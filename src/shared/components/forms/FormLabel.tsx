import clsx from "clsx"
import { LabelHTMLAttributes } from "react"

type Props = LabelHTMLAttributes<HTMLLabelElement>

export function FormLabel({ children, className, ...props }: Props) {
    return (
        <label
            className={clsx(
                "block text-sm font-semibold text-mirage-950 mb-2 transition-colors duration-200",
                "hover:text-azul-700",
                className
            )}
            {...props}
        >
            {children}
        </label>
    )
}
