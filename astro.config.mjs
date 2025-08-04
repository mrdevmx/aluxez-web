// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import viteConfig from './vite.config.ts'

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    vite: viteConfig
});