# Aluxez Web - Configuración para Coolify

## 🚀 Configuración de Despliegue

### Variables de Entorno Requeridas:
```bash
NODE_ENV=production
PORT=3000
```

### Configuración en Coolify:

**Tipo de Aplicación:** Docker/Node.js
**Build Command:** `npm run build`
**Start Command:** `npm run start`
**Puerto:** `3000`
**Dockerfile:** `./Dockerfile`

### Scripts de NPM:
- `npm run dev` - Desarrollo local
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run preview` - Preview local

### Estructura del Proyecto:
- Framework: Astro
- Build Tool: Vite
- Styling: TailwindCSS
- Package Manager: NPM

### Verificación Local:
```bash
# Build y test local
npm install
npm run build
npm run start
```

### Healthcheck:
La aplicación incluye un healthcheck en el puerto 3000 para verificar que esté funcionando correctamente.

### Notas:
- La aplicación se ejecuta en el puerto 3000
- Configurada para aceptar conexiones desde cualquier host (0.0.0.0)
- Optimizada para contenedores Docker
- Incluye usuario no-root para seguridad
