"use client";

import { toast } from "sonner";
import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { User } from "../../auth";
import { updateProfileAction } from "../actions";
import { ProfileInput, ProfileSchema } from "../schemas/profileSchema";
import { Form, FormLabel, FormInput, FormTextArea, FormSubmit, ImageUploadField, FormError } from "@/src/shared/components/forms";


type Porps = {
    user: User
}

export function ProfileForm({ user }: Porps) {

    const methods = useForm({
        resolver: zodResolver(ProfileSchema),
        mode: 'all',
        defaultValues: {
            name: user.name,
            bio: user.bio ?? '',
            image: user.image ?? '',
        }
    })

    const { register, handleSubmit, formState: { errors } } = methods

    const onSubmit = async (data: ProfileInput) => {
        const { error, success } = await updateProfileAction(data)
        if ( error ) toast.error(error);
        if ( success ) {
            toast.success(success)
            redirect('/dashboard')
        }
    }

    return (
        <FormProvider {...methods}>
            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormLabel htmlFor="name">Nombre:</FormLabel>
                <FormInput
                    id="name"
                    type="text"
                    placeholder="Tu Nombre"
                    error={!!errors.name}
                    {...register('name')}
                />
                {errors.name && <FormError>{errors.name.message}</FormError>}

                <FormLabel id="bio">Biografía</FormLabel>
                <FormTextArea
                    id="bio"
                    placeholder="Añade una Descripción o Biografía"
                    error={!!errors.bio}
                    {...register('bio')}
                />
                {errors.bio && <FormError>{errors.bio.message}</FormError>}

                <ImageUploadField
                    endpoint="coreMeetUploader"
                    maxFileSize="1"
                    label="Imagen de Perfil"
                    previewLabel="Imagen de Perfil"
                    name="image"
                    showPreview={true}
                    required={false}
                />

                <FormSubmit value={"Guardar Cambios"} />
            </Form>
        </FormProvider>
    );
}
