import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: [
      'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
      '.apps.run-on-seenode.com',
      '.seenode.com',
      'localhost',
      '127.0.0.1',
      '*'
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
      '127.0.0.1',
      '*'
    ],
    host: '0.0.0.0',
    port: 3000
  }
});