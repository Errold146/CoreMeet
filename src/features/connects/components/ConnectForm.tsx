"use client"

import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";

import { ConnectInput } from "../schemas/connectSchema";
import { FormInput, FormLabel, FormTextArea, FormToggle, FormSelect, FormError, ImageUploadField } from "@/components/forms";

type Community = {
    id: string
    name: string
}

type Category = {
    id: string
    name: string
}

type Props = {
    communities: Community[]
    categories: Category[]
}

const DynamicLocationPicker = dynamic(() => import('./LocationPicker'), {ssr: false})

export function ConnectForm({ communities, categories }: Props) {

    const { register, watch, formState: { errors }, setValue } = useFormContext<ConnectInput>()

    const isVirtual = watch('virtual')

    return (
        <>
            <fieldset className="space-y-3">
                <legend className="font-black text-3xl mb-5">
                    Detalles del CoreConnect
                </legend>

                <FormLabel htmlFor="title">Nombre del CoreConnect</FormLabel>
                <FormInput
                    id="title"
                    type="text"
                    placeholder="Titulo Meeti"
                    error={!!errors.title}
                    {...register('title')}
                />
                {errors.title && <FormError>{errors.title.message}</FormError>}

                <FormLabel htmlFor="details">Detalles del CoreConnect</FormLabel>
                <FormTextArea
                    id="details"
                    placeholder="Descripción CoreConnect"
                    error={!!errors.details}
                    {...register('details')}
                />
                {errors.details && <FormError>{errors.details.message}</FormError>}

                <ImageUploadField
                    name="image"
                    endpoint="coreMeetUploader"
                    label="Imagen de CoreConnect"
                    previewLabel="Vista previa de la imagen de CoreConnect"
                    maxFileSize="1MB"
                    showPreview={true}
                />

                <FormLabel htmlFor="communityId">CoreCommunity a la que pertenece CoreConnect</FormLabel>
                <FormSelect id="communityId" error={!!errors.communityId} {...register('communityId')}>
                    <option value="">-- Selecciona CoreCommunity --</option>
                    {communities.map(community => (
                        <option key={community.id} value={community.id}>
                            {community.name}
                        </option>
                    ))}
                </FormSelect>
                {errors.communityId && <FormError>{errors.communityId.message}</FormError>}

                <FormLabel htmlFor="categoryId">Categoría del CoreConnect</FormLabel>
                <FormSelect id="categoryId" error={!!errors.categoryId} {...register('categoryId')}>
                    <option value="">-- Selecciona Categoría --</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </FormSelect>
                {errors.categoryId && <FormError>{errors.categoryId.message}</FormError>}

                <FormLabel htmlFor="availableSeats">Cupo</FormLabel>
                <FormInput
                    type="number"
                    min={1}
                    id="availableSeats"
                    placeholder="Cupo Disponible"
                    error={!!errors.availableSeats}
                    {...register('availableSeats')}
                />
                {errors.availableSeats && <FormError>{errors.availableSeats.message}</FormError>}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="space-y-3">
                        <FormLabel htmlFor="date">Fecha:</FormLabel>
                        <FormInput
                            type="date"
                            id="date"
                            error={!!errors.date}
                            {...register('date')}
                        />
                        {errors.date && <FormError>{errors.date.message}</FormError>}
                    </div>
                    <div className="space-y-3">
                        <FormLabel htmlFor="time">Hora:</FormLabel>
                        <FormInput
                            type="time"
                            step={1800}
                            id="time"
                            error={!!errors.time}
                            {...register('time')}
                        />
                        {errors.time && <FormError>{errors.time.message}</FormError>}
                    </div>
                </div>

                <FormLabel htmlFor="virtual">¿Evento Virtual?</FormLabel>
                <FormToggle
                    checked={isVirtual}
                    onChange={(e) => {
                        setValue('virtual', e.target.checked)
                    }}
                />
            </fieldset>

            {isVirtual && (
                <fieldset className="space-y-3">
                    <legend className="font-black text-3xl mb-5">
                        Enlace de Reunión Virtual
                    </legend>

                    <FormLabel htmlFor="meetingUrl">URL de la Reunión (Opcional):</FormLabel>
                    <FormInput
                        id="meetingUrl"
                        type="url"
                        placeholder="https://zoom.us/j/123456789 o https://meet.google.com/abc-defg-hij"
                        error={!!('meetingUrl' in errors && errors.meetingUrl)}
                        {...register('meetingUrl')}
                    />
                    {'meetingUrl' in errors && errors.meetingUrl && (<FormError>{errors.meetingUrl.message}</FormError>)}
                </fieldset>
            )}

            {!isVirtual && (
                <fieldset className="space-y-3">
                    <legend className="font-black text-3xl mb-5">
                        Ubicación del CoreConnect
                    </legend>

                    <FormLabel id="place_name">Nombre Lugar:</FormLabel>
                    <FormInput
                        id="place_name"
                        type="text"
                        placeholder="Nombre Lugar evento"
                        error={!!('location' in errors && errors.location?.placeName)}
                        {...register('location.placeName')}
                    />
                    {'location' in errors && errors.location?.placeName && (<FormError>{errors.location.placeName.message}</FormError>)}

                    <DynamicLocationPicker />
                </fieldset>
            )}
        </>
    );
}
