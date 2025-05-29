import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Configure Vue to treat custom elements properly
                    isCustomElement: (tag) => tag.includes('-')
                }
            }
        }),
        // Generate TypeScript declaration files
        dts({
            insertTypesEntry: true
        })
    ],
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
            name: 'SharedWebComponents',
            formats: ['es', 'umd'],
            fileName: (format) => `shared-web-components.${format}.js`
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
        target: 'esnext',
        sourcemap: true
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    define: {
        'process.env': 'process.env'
    }
})
