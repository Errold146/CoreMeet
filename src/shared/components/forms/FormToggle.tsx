import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function FormToggle(props: Props) {
    return (
        <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-mirage-200 p-0.5 inset-ring inset-ring-mirage-900/5 outline-offset-2 outline-naranja-600 transition-colors duration-200 ease-in-out has-checked:bg-naranja-600 has-focus-visible:outline-2">
            <span className="size-5 rounded-full bg-white shadow-xs ring-1 ring-mirage-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-5" />
            <input
                name="setting"
                type="checkbox"
                aria-label="Use setting"
                className="absolute inset-0 appearance-none focus:outline-hidden"
                {...props}
            />
        </div>
    );
}
