"use client"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { CommunityForm } from "./CommunityForm";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";
import { SelectCoreCommunity } from "../types/community.types";
import { Form, FormSubmit } from "@/src/shared/components/forms";
import { updateCoreCommunityAction } from "../actions/community-actions";

type Props = {
    community: SelectCoreCommunity
}

export function EditCoreCommunity({ community }: Props) {

    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { name, description, imageUrl, id } = community
    const previousImageUrl = imageUrl; // Guardamos la URL original

    const methods = useForm({
        resolver: zodResolver(CommunitySchema),
        mode: "all",
        defaultValues: {
            name,
            description,
            imageUrl
        }
    });

    const onSubmit = async (data: CommunityInput) => {
        setIsSubmitting(true);

        try {
            const result = await updateCoreCommunityAction(
                id,
                data,
                previousImageUrl
            );

            if (result.error) {
                toast.error(result.error);
                return;
            }

            toast.success(result.success);
            router.push('/dashboard/communities');
            router.refresh();

        } catch (error) {
            toast.error('Error inesperado al actualizar la comunidad');
            console.error(error);

        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <FormProvider {...methods}>
            <Form
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <CommunityForm />
               <FormSubmit value={isSubmitting ? 'Guardando...' : 'Guardar Cambios'} disabled={isSubmitting} />
            </Form>
        </FormProvider>
    )
}
