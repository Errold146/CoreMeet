export { generatePageTitle } from "./metadata";
export * from './ui'
export * from "./uploadthing";
// uploadthing-utils NO se exporta aquí porque usa UTApi (solo servidor)
// Importar directamente: import { deleteFileFromUploadThing } from '@/src/shared/utils/uploadthing-utils'
