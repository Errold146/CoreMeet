"use client"

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { SelectConnect } from "../types";
import { ConnectForm } from "./ConnectForm";
import { Form, FormSubmit } from "@/components/forms";
import { updateConnectAction } from "../actions/connect-action";
import { ConnectInput, ConnectSchema } from "../schemas/connectSchema";

type Community = {
    id: string
    name: string
}

type Category = {
    id: string
    name: string
}

type Props = {
    connect: SelectConnect
    communities: Community[]
    categories: Category[]
}

export function EditConnect({ connect, communities, categories }: Props) {

    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const methods = useForm<ConnectInput>({
        resolver: zodResolver(ConnectSchema),
        mode: "all",
        defaultValues: {
            title: connect.title,
            details: connect.details,
            image: connect.image,
            communityId: connect.communityId,
            categoryId: connect.categoryId,
            availableSeats: connect.availableSeats,
            date: connect.date,
            time: connect.time,
            virtual: connect.virtual,
            meetingUrl: connect.meetingUrl ?? '',
            location: {
                placeName: connect.location?.placeName ?? '',
                address: connect.location?.address ?? '',
                city: connect.location?.city ?? '',
                country: connect.location?.country ?? '',
                lat: connect.location?.lat ?? 9.936561,
                lng: connect.location?.lng ?? -84.107493,
            },
        } as ConnectInput,
    })

    const onSubmit = async (data: ConnectInput) => {
        setIsSubmitting(true)

        try {
            const { error, success } = await updateConnectAction(connect.id, data)

            if (error) {
                toast.error(error)
                return
            }

            toast.success(success)
            router.push('/dashboard/connects')
            router.refresh()

        } catch (error) {
            toast.error('Error inesperado al actualizar el CoreConnect')
            console.error(error)

        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                <ConnectForm communities={communities} categories={categories} />
                <FormSubmit value={isSubmitting ? 'Guardando...' : 'Guardar Cambios'} disabled={isSubmitting} />
            </Form>
        </FormProvider>
    )
}

