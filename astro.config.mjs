// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    server: {
        host: '0.0.0.0',
        port: 80
    },
    vite: {
        preview: {
            allowedHosts: [
                'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
                '.apps.run-on-seenode.com',
                '*'
            ],
            host: '0.0.0.0',
            port: 80,
            strictPort: true
        },
        server: {
            host: '0.0.0.0',
            port: 80
        }
    }
});