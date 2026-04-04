import clsx from "clsx"
import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

export function FormSubmit({ className, ...props }: Props) {
    return (
        <input
            type="submit"
            className={clsx("w-full p-2 bg-azul-200 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border border-azul-400 hover:border-azul-800 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl rounded-xl text-lg font-semibold mt-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-mirage-200 disabled:text-mirage-400 disabled:border-mirage-300", className)}
            {...props}
        />
    )
}
