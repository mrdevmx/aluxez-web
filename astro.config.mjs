// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    vite: {
        preview: {
            allowedHosts: [
                'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
                '.apps.run-on-seenode.com',
                '.seenode.com',
                'localhost',
                '*'  // Permite todos los hosts
            ],
            host: '0.0.0.0',
            port: 80,
            strictPort: false
        },
        server: {
            allowedHosts: [
                'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
                '.apps.run-on-seenode.com', 
                '.seenode.com',
                'localhost',
                '*'
            ],
            host: '0.0.0.0'
        }
    }
});