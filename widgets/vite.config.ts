import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import {resolve} from "path";
import {fileURLToPath} from "node:url";

export default defineConfig({
    plugins: [
        tailwindcss(),
        dts(),
        vue()
        // vue({
        //     template: {
        //         compilerOptions: {
        //             // Configure Vue to treat custom elements properly
        //             isCustomElement: (tag) => tag.includes('-')
        //         }
        //     }
        // }),
        // Generate TypeScript declaration files
    ],
    build: {
        lib: {
            // entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
            entry: resolve(__dirname, "src/main.ts"),
            name: 'SharedWebComponents',
            formats: ['es'],
            // fileName: (format) => `shared-web-components.${format}.js`
            fileName: 'shared-web-components'
        },
        rollupOptions: {
            // Externalize Vue since it should be provided by the consuming application
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        // Target modern browsers for custom elements support
        target: 'esnext'
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
