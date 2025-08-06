import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'all',
      'w8scwoos8kwg0s8cokggowco.154.122.229.178.sslip.io',
      '*'
    ],
  }
});