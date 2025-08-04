// @ts-check
import { defineConfig } from 'astro/config';
import viteConfig from './vite.config.js';

// https://astro.build/config
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    vite: viteConfig
});