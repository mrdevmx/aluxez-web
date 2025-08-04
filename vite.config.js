console.log('[vite.config.js]: cargado');

export default {
  preview: {
    allowedHosts: [
      'web-tx3htnl2yqa0.up-de-fra1-k8s-1.apps.run-on-seenode.com',
      '.apps.run-on-seenode.com', // Permite cualquier subdominio de seenode
      '*'
    ],
    host: '0.0.0.0', // Permite conexiones desde cualquier IP
    port: 80,
    strictPort: true
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
};