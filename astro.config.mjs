// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import viteConfig from './vite.config.js'

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    server: {
        host: true,
        port: 80
    },
    vite: viteConfig
});