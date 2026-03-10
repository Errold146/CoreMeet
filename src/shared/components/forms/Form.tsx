import clsx from "clsx";
import { FormHTMLAttributes } from "react";

type Props  = FormHTMLAttributes<HTMLFormElement>

export function Form({ children, className, ...props}: Props) {
    return (
        <form
            className={clsx("mt-10 space-y-3 p-5 shadow-2xl rounded-lg border border-mirage-300", className)}
            {...props}
        >
            {children}
        </form>
    )
}
