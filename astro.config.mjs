// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    vite: {
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
        preview: {
            host: '0.0.0.0',
            port: 3000,
            allowedHosts: true
        }
    }
});