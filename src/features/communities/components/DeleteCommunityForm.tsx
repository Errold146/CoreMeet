"use client"

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockClosedIcon, XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { useCoreCommunityStore } from "../stores/community.store";
import { deleteCoreCommunityAction } from "../actions/community-actions";
import { Form, FormLabel, FormInput, FormError } from "@/components/forms";
import { CheckPasswordInput, CheckPasswordSchema } from "../../auth/schemas/authSchema";

export function DeleteCommunityForm() {

    const { setOpen, setCommunity, community } = useCoreCommunityStore();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(CheckPasswordSchema),
        mode: 'all'
    })

    const handleCancel = () => {
        setOpen(false);
        setCommunity(null);
    }

    const onSubmit = async (data: CheckPasswordInput) => {
        if ( !community ) return;
        const { error, success } = await deleteCoreCommunityAction(data, community.id)

        if ( error ) toast.error(error);
        if ( success ) {
            toast.success(success)
            setOpen(false)
            setCommunity(null)
            setTimeout(() => {
                redirect('/dashboard/communities')
            }, 1000);
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
                    <span>Eliminar Comunidad</span>
                </button>
            </div>
        </Form>
    );
}
