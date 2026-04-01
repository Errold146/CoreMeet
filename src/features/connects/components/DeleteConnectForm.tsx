"use client"

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockClosedIcon, XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { useCoreConnectStore } from "../stores/connect.store";
import { deleteConnectAction } from "../actions/connect-action";
import { Form, FormLabel, FormInput, FormError } from "@/components/forms";
import { CheckPasswordInput, CheckPasswordSchema } from "../../auth/schemas/authSchema";

export function DeleteConnectForm() {

    const router = useRouter();
    const { setOpen, setConnect, connect } = useCoreConnectStore();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CheckPasswordSchema),
        mode: 'all'
    })

    const handleCancel = () => {
        setOpen(false);
        setConnect(null);
    }

    const onSubmit = async (data: CheckPasswordInput) => {
        if ( !connect ) return;
        const { error, success } = await deleteConnectAction(data, connect.id)

        if ( error ) toast.error(error);
        if ( success ) {
            toast.success(success)
            setOpen(false)
            setConnect(null)
            router.refresh()
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
            <div className="space-y-2">
                <FormLabel htmlFor="password" className="text-mirage-800 font-semibold flex items-center gap-2">
                    <LockClosedIcon className="w-4 h-4 text-mirage-600" />
                    Confirma tu contraseña
                </FormLabel>
                <FormInput
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full rounded-lg border-2 border-mirage-300 focus:border-azul-500 focus:ring-2 focus:ring-azul-200 transition-all"
                    error={!!errors.password}
                    {...register('password')}
                />
                {errors.password && <FormError>{errors.password.message}</FormError>}
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 flex items-center justify-center gap-2 bg-mirage-100 text-mirage-800 hover:bg-mirage-200 border-2 border-mirage-300 hover:border-mirage-400 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2.5 px-4 group"
                >
                    <XMarkIcon className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    <span>Cancelar</span>
                </button>

                <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 border-2 border-red-700 hover:border-red-800 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg text-sm font-semibold py-2.5 px-4 group"
                >
                    <ExclamationTriangleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Eliminar CoreConnect</span>
                </button>
            </div>
        </Form>
    );
}
