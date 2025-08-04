console.log('[vite.config.js]: cargado');

export default {
  preview: {
    allowedHosts: [
      'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.apps.run-on-seenode.com',
      '.seenode.com'
    ],
    host: '0.0.0.0',
    port: 80,
    strictPort: false
  },
  server: {
    allowedHosts: [
      'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.apps.run-on-seenode.com',
      '.seenode.com'
    ],
    host: '0.0.0.0',
    port: 80
  }
};