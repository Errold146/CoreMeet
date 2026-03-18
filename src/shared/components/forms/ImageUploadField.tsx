"use client"

import { useState, useRef, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import Image from 'next/image';

import { UploadDropzone } from '@/src/shared/utils';
import { FormError, FormLabel } from '@/components/forms';

interface ImageUploadFieldProps {
    name: string;
    endpoint: 'coreMeetUploader';
    label?: string;
    previewLabel?: string;
    maxFileSize?: string;
    showPreview?: boolean;
    required?: boolean;
}

export function ImageUploadField({
    name,
    endpoint,
    label = 'Imagen',
    previewLabel = 'Vista previa de la imagen',
    maxFileSize = '1MB',
    showPreview = true,
    required = false,
}: ImageUploadFieldProps) {
    const { setValue, formState: { errors, isSubmitSuccessful }, getValues } = useFormContext<Record<string, any>>();

    const [isUploading, setIsUploading] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const uploadInProgressRef = useRef(false);
    const cleanupSkipRef = useRef(false);

    const error = errors[name];
    const currentImage = getValues('imageUrl') ? getValues('imageUrl') : null
    const text = 'Imagen Actual de CoreCommunity'

    // Marcar que no se debe limpiar cuando el formulario se envió exitosamente
    useEffect(() => {
        if (isSubmitSuccessful && uploadedUrl) {
            cleanupSkipRef.current = true;
        }
    }, [isSubmitSuccessful, uploadedUrl]);

    const deleteImage = async () => {
        if (!uploadedUrl) return;

        setIsDeleting(true);
        try {
            // Eliminar la nueva imagen subida del servidor
            const response = await fetch('/api/uploadthing/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fileUrl: uploadedUrl }),
            });

            if (!response.ok) {
                throw new Error('Error al eliminar la imagen');
            }

            setUploadedUrl(null);
            uploadInProgressRef.current = false;

            // Si hay una imagen actual (modo edición), restaurarla
            if (currentImage) {
                setValue(name, currentImage, { shouldValidate: false });
                toast.success('Nueva imagen eliminada. Se restauró la imagen actual');
            } else {
                // Si no hay imagen actual (modo creación), limpiar el campo
                setValue(name, '', { shouldValidate: false });
                toast.success('Imagen eliminada correctamente');
            }
        } catch (error) {
            toast.error('Error al eliminar la imagen anterior');
            console.error('Error deleting image:', error);
        } finally {
            setIsDeleting(false);
        }
    };

    // Limpiar imagen huérfana al abandonar la página sin guardar
    useEffect(() => {
        return () => {
            // No limpiar si el formulario se guardó exitosamente
            if (cleanupSkipRef.current) return;

            // Al desmontar el componente, si hay una imagen nueva subida que no se guardó
            if (uploadedUrl && uploadedUrl !== currentImage) {
                // Eliminar la imagen huérfana del servidor
                fetch('/api/uploadthing/delete', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ fileUrl: uploadedUrl }),
                }).catch((error) => {
                    console.error('Error al limpiar imagen huérfana:', error);
                });
            }
        };
    }, [uploadedUrl, currentImage]);

    return (
        <div className="space-y-4">
            {label && <FormLabel>{label}</FormLabel>}

            {uploadedUrl && (
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2">
                        <span className="text-green-600 font-medium">✓ Imagen subida exitosamente</span>
                        <span className="text-sm text-gray-600">(Puedes cerrar el administrador de archivos)</span>
                    </div>
                    <button
                        type="button"
                        onClick={deleteImage}
                        disabled={isDeleting}
                        className="text-sm text-red-600 hover:text-red-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isDeleting ? 'Eliminando...' : 'Cambiar imagen'}
                    </button>
                </div>
            )}

            <div>
                <UploadDropzone
                    endpoint={endpoint}
                    content={{
                        button: uploadedUrl ? '✓ Imagen Subida' : (isUploading ? 'Subiendo...' : 'Seleccionar Imagen'),
                        label: uploadedUrl
                            ? '✓ Imagen cargada exitosamente'
                            : (isUploading ? 'Subiendo imagen...' : 'Elige un archivo o arrástralo aquí...'),
                        allowedContent: uploadedUrl ? 'Puedes cerrar cualquier ventana abierta' : `Máximo 1 imagen de ${maxFileSize}`
                    }}
                    onUploadBegin={() => {
                        if (uploadInProgressRef.current || uploadedUrl) {
                            return;
                        }
                        uploadInProgressRef.current = true;
                        setIsUploading(true);
                    }}
                    onClientUploadComplete={(res) => {
                        if (uploadedUrl) {
                            return;
                        }

                        if (res && res[0]) {
                            const url = res[0].ufsUrl;
                            setUploadedUrl(url);
                            setValue(name, url, { shouldValidate: true });

                            if (currentImage) {
                                toast.success('Nueva imagen subida. Recuerda guardar los cambios para aplicar.');
                            } else {
                                toast.success('Imagen subida correctamente. Puedes cerrar el administrador de archivos si está abierto.');
                            }
                        }
                        setIsUploading(false);
                        uploadInProgressRef.current = false;
                    }}
                    onUploadError={(error) => {
                        toast.error(`Error al subir la imagen: ${error.message}`);
                        setIsUploading(false);
                        uploadInProgressRef.current = false;
                    }}
                    config={{
                        mode: 'auto'
                    }}
                    disabled={isUploading || !!uploadedUrl}
                />
            </div>
            {error && <FormError>{error.message as string}</FormError>}

            {showPreview && uploadedUrl && (
                <div className="my-6">
                    <FormLabel>{previewLabel}</FormLabel>
                    <div className="relative w-fit mx-auto rounded-xl overflow-hidden shadow-lg border-2 border-azul-300">
                        <Image
                            src={uploadedUrl}
                            alt={previewLabel}
                            width={300}
                            height={200}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {currentImage && !uploadedUrl && (
                <div className="my-6">
                    <FormLabel>{text}</FormLabel>
                    <div className="relative w-fit mx-auto rounded-xl overflow-hidden shadow-lg border-2 border-azul-300">
                        <Image
                            src={currentImage}
                            alt={text}
                            width={300}
                            height={200}
                            className="object-cover w-auto h-auto"
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
