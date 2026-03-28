import clsx from "clsx"
import { SelectHTMLAttributes } from "react"

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    error?: boolean
}

export function FormSelect({ className, error, ...props }: Props) {
    return (
        <select
            className={clsx(
                "w-full px-4 py-3 rounded-xl border-2",
                error
                    ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                    : "border-mirage-300 focus:border-azul-500 focus:ring-2 focus:ring-azul-200",
                "bg-white text-mirage-950",
                "shadow-sm hover:shadow-md",
                "focus:outline-none",
                "transition-all duration-300 ease-in-out",
                "disabled:bg-mirage-100 disabled:cursor-not-allowed disabled:opacity-60",
                className
            )}
            {...props}
        >
            {props.children}
        </select>
    )
}
