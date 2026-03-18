import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

export function FormTextArea({ className, error, ...props }: Props) {
    return (
        <textarea
            className={clsx(
                "w-full px-4 pt-3 rounded-xl border-2",
                error
                    ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
                    : "border-mirage-300 focus:border-azul-500 focus:ring-2 focus:ring-azul-200",
                "bg-white text-mirage-950 placeholder:text-mirage-400",
                "shadow-sm hover:shadow-md",
                "focus:outline-none",
                "transition-all duration-300 ease-in-out",
                "disabled:bg-mirage-100 disabled:cursor-not-allowed disabled:opacity-60",
                "resize-vertical min-h-30",
                className
            )}
            {...props}
        />
    );
}
