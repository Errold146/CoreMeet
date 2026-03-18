"use client"

import { useFormContext } from 'react-hook-form';

import { CommunityInput } from '../schemas/communitySchema';
import { FormError, FormInput, FormLabel, FormTextArea, ImageUploadField } from '@/components/forms';

export function CommunityForm() {

    const { register, formState: {errors} } = useFormContext<CommunityInput>()

    return (
        <>
            <FormLabel htmlFor='name'>Nombre CoreCommunity</FormLabel>
            <FormInput
                id='name'
                type='text'
                placeholder='Nombre de CoreCommunity. Ejemplo: Estilo de Vida...'
                error={!!errors.name}
                {...register('name')}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}

            <ImageUploadField
                name="imageUrl"
                endpoint="coreMeetUploader"
                label="Imagen de CoreCommunity"
                previewLabel="Vista previa de la imagen de CoreCommunity"
                maxFileSize="1MB"
                showPreview={true}
            />

            <FormLabel htmlFor='description'>Descripción CoreCommunity</FormLabel>
            <FormTextArea
                id='description'
                placeholder='Descripción general o detallada de la CoreCommunity'
                error={!!errors.description}
                {...register('description')}
            />
            {errors.description && <FormError>{errors.description.message}</FormError>}
        </>
    )
}
