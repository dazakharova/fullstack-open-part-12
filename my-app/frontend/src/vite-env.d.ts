/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    // add more VITE_ vars if you have them later
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}