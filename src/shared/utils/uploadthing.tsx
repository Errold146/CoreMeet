import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

const BaseUploadButton = generateUploadButton<OurFileRouter>();
const BaseUploadDropzone = generateUploadDropzone<OurFileRouter>();

type UploadButtonProps = React.ComponentProps<typeof BaseUploadButton>;
type UploadDropzoneProps = React.ComponentProps<typeof BaseUploadDropzone>;

export function UploadButton(props: UploadButtonProps) {
    return (
        <BaseUploadButton
            {...props}
            appearance={{
                button:
                    "bg-azul-200 py-2 text-azul-800 hover:text-azul-50 hover:bg-azul-500 border-2 border-azul-400 hover:border-azul-800 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl text-base font-semibold py-3 px-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-azul-200 ut-ready:bg-azul-200 ut-uploading:bg-azul-400 ut-uploading:cursor-not-allowed",
                container: "w-full flex justify-center items-center",
                allowedContent: "text-mirage-600 text-sm mt-2 font-medium",
                ...props.appearance,
            }}
        />
    );
}

export function UploadDropzone(props: UploadDropzoneProps) {
    return (
        <BaseUploadDropzone
            {...props}
            appearance={{
                container:
                    "w-full border-2 border-dashed border-azul-400 hover:border-azul-600 bg-azul-50/50 hover:bg-azul-100/50 rounded-xl p-8 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg",
                uploadIcon: "text-azul-500 w-12 h-12",
                label: "text-azul-800 font-semibold text-lg mt-4",
                allowedContent: "text-mirage-600 text-sm mt-2 font-medium",
                button:
                    "mt-4 py-2 bg-naranja-200 text-naranja-800 hover:text-naranja-50 hover:bg-naranja-500 border-2 border-naranja-400 hover:border-naranja-800 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl text-base font-semibold py-3 px-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-naranja-200",
                ...props.appearance,
            }}
        />
    );
}
