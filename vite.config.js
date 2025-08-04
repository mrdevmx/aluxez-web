console.log('[vite.config.js]: cargado');

export default {
  preview: {
    allowedHosts: ['*'], // Permite todos los hosts
    host: true,
    port: 80
  },
  server: {
    host: true,
    port: 80
  }
};