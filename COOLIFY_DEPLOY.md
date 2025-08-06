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

### 🔒 Configuración SSL/HTTPS:

**Automático via Traefik:**
- ✅ SSL habilitado automáticamente
- ✅ Certificados Let's Encrypt
- ✅ Redirección HTTP → HTTPS forzada
- ✅ Compatible con dominios personalizados

**Labels de Traefik incluidos:**
- `traefik.http.routers.aluxez-web.tls=true`
- `traefik.http.routers.aluxez-web.tls.certresolver=letsencrypt`
- `traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https`

### 🌐 Configuración de Dominio:

**Para dominio personalizado:**
1. Apunta tu dominio a la IP de Coolify
2. Actualiza el label `Host()` en el Dockerfile
3. Redeploy la aplicación
4. SSL se configurará automáticamente

**Ejemplo para dominio personalizado:**
```dockerfile
LABEL traefik.http.routers.aluxez-web.rule=Host(`tu-dominio.com`)
```

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

### URLs:
- **HTTP:** `http://xowww4osssw4oko4ggwo0k0k.154.12.229.178.sslip.io`
- **HTTPS:** `https://xowww4osssw4oko4ggwo0k0k.154.12.229.178.sslip.io` (redirección automática)

### Healthcheck:
La aplicación incluye un healthcheck en el puerto 3000 para verificar que esté funcionando correctamente.

### Notas:
- La aplicación se ejecuta en el puerto 3000
- Configurada para aceptar conexiones desde cualquier host (0.0.0.0)
- Optimizada para contenedores Docker
- SSL/TLS habilitado automáticamente
- Redirección HTTPS forzada para seguridad
