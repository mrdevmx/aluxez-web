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
      'xowww4osssw4oko4ggwo0k0k.154.12.229.178.sslip.io',
      'w8scwoos8kwg0s8cokggowco.154.122.229.178.sslip.io',
      'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
      '*'
    ],
  }
});