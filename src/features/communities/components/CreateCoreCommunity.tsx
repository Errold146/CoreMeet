"use client"

import { toast } from "sonner";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { CommunityForm } from "./CommunityForm";
import { Form, FormSubmit } from "@/components/forms";
import { createCoreCommunityAction } from "../actions/community-actions";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";

export function CreateCoreCommunity() {

    const methods = useForm({
        resolver: zodResolver(CommunitySchema),
        mode: 'all'
    })

    const onSubmit = async (data: CommunityInput) => {
        const { error, success } = await createCoreCommunityAction(data)

        if ( error ) toast.error(error);

        if ( success ) {
            toast.success(success)
            redirect('/dashboard/communities')
        }
    }

    return (
        <FormProvider {...methods}>
            <Form
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <CommunityForm />

                <FormSubmit value={'Crear CoreCommunity'} />
            </Form>
        </FormProvider>
    )
}
