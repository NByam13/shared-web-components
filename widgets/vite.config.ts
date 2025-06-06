import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import {resolve} from "path";
import {fileURLToPath} from "node:url";
import replace from "@rollup/plugin-replace";

export default defineConfig({
    plugins: [
        tailwindcss(),
        dts(),
        vue({
            template: {
                compilerOptions: {
                    // Configure Vue to treat custom elements properly
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        }),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production'),
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: 'SharedWebComponents',
            formats: ['es'],
            fileName: 'shared-web-components'
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
