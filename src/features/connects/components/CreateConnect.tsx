"use client";

import { toast } from "sonner";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { ConnectForm } from "./ConnectForm";
import { Form, FormSubmit } from "@/components/forms";
import { createConnectAction } from "../actions/connect-action";
import { ConnectInput, ConnectSchema } from "../schemas/connectSchema";

type Community = {
    id: string;
    name: string;
};

type Category = {
    id: string;
    name: string;
};

type Props = {
    communities: Community[];
    categories: Category[];
};

export function CreateConnect({ communities, categories }: Props) {

    const methods = useForm<ConnectInput>({
        resolver: zodResolver(ConnectSchema),
        mode: "all",
        defaultValues: {
            title: "",
            details: "",
            categoryId: "",
            communityId: "",
            availableSeats: 0,
            date: "",
            time: "",
            image: "",
            virtual: false,
            location: {
                placeName: "",
                address: "",
                city: "",
                country: "",
                lat: 9.936561,
                lng: -84.107493,
            },
        } as ConnectInput,
    })

    const onSubmit = async (data: ConnectInput) => {
        const { error, success } = await createConnectAction(data)

        if ( error ) toast.error(error);
        if ( success ) {
            toast.success(success)
            redirect('/dashboard/connects')
        }
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                <ConnectForm communities={communities} categories={categories} />
                <FormSubmit value={"Crear CoreConnect"} />
            </Form>
        </FormProvider>
    );
}
