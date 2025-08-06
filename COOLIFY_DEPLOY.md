# Aluxez Web - Configuración para Coolify Cloud

## 🚀 Configuración de Despliegue

### Variables de Entorno Requeridas:
```bash
NODE_ENV=production
PORT=3000
```

### Configuración en Coolify Cloud:

**Tipo de Aplicación:** Docker  
**Build Pack:** Dockerfile  
**Puerto Interno:** `3000`  
**Dockerfile:** `./Dockerfile`  

### � Configuración del Dockerfile:
```dockerfile
# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Install serve globally to serve static files
RUN npm install -g serve

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start serving the built files
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### 🌐 Configuración de Dominio y SSL:

#### Método Recomendado (Automático):

1. **En Coolify Cloud → tu aplicación → Configuration → General**
2. **Campo "Domains":** Introducir `https://tu-dominio.com`
3. **Advanced → Force Https:** ✅ Habilitado
4. **Redeploy**

#### Configuración DNS:
```
# Opción 1: A Record directo
Tipo: A
Nombre: qa
Valor: [IP-de-tu-VPS]

# Opción 2: CNAME (Recomendado)
Tipo: CNAME
Nombre: qa
Valor: server.aluxez.com

# Y el registro A principal:
Tipo: A
Nombre: server
Valor: [IP-de-tu-VPS]
```

### 🔒 Labels SSL Generados Automáticamente:

Coolify Cloud genera automáticamente estos labels cuando usas `https://` en el dominio:

```ini
traefik.enable=true
traefik.http.middlewares.gzip.compress=true
traefik.http.routers.http-0-[hash].entryPoints=web
traefik.http.routers.http-0-[hash].middlewares=gzip
traefik.http.routers.http-0-[hash].rule=Host(`qa.aluxez.com`)
traefik.http.routers.http-0-[hash].service=http-0-[hash]
traefik.http.routers.https-0-[hash].entryPoints=websecure
traefik.http.routers.https-0-[hash].rule=Host(`qa.aluxez.com`)
traefik.http.routers.https-0-[hash].service=http-0-[hash]
traefik.http.routers.https-0-[hash].tls=true
traefik.http.routers.https-0-[hash].tls.certresolver=letsencrypt
traefik.http.services.http-0-[hash].loadbalancer.server.port=3000
```

### ✅ Funcionalidades SSL:
- ✅ SSL habilitado automáticamente
- ✅ Certificados Let's Encrypt renovación automática
- ✅ Redirección HTTP → HTTPS forzada
- ✅ Compatible con dominios personalizados
- ✅ Compresión GZIP habilitada

### 📝 Pasos para Despliegue:

1. **Preparar DNS:**
   - Crear registro A o CNAME apuntando a tu VPS
   - Esperar propagación (5-10 minutos)

2. **En Coolify Cloud:**
   - Crear nueva aplicación desde Git
   - Configurar Dockerfile como Build Pack
   - En "Domains": introducir `https://tu-dominio.com`
   - Habilitar "Force Https" en Advanced
   - Deploy

3. **Verificar:**
   - HTTP: `http://tu-dominio.com` (debe redirigir a HTTPS)
   - HTTPS: `https://tu-dominio.com` (debe cargar con SSL válido)

### 🔍 Troubleshooting:

**Si HTTP da 404:**
- Verificar que el DNS esté propagado
- Confirmar que el puerto 3000 esté expuesto
- Revisar logs del contenedor

**Si HTTPS da "no available server":**
- Esperar 3-5 minutos para generación de certificado
- Verificar que el dominio en DNS coincida exactamente
- Confirmar que "Force Https" esté habilitado

### Scripts de NPM:
- `npm run dev` - Desarrollo local
- `npm run build` - Build de producción
- `npm run preview` - Preview local

### Estructura del Proyecto:
- Framework: Astro v5.3.1
- Build Tool: Vite v5.0.0
- Styling: TailwindCSS
- Package Manager: NPM
- Servidor: serve (estático)

### URLs de Ejemplo:
- **Desarrollo:** `https://qa.aluxez.com`
- **Con dominio personalizado:** `https://tu-dominio.com`

### Notas Importantes:
- Coolify Cloud maneja automáticamente SSL cuando usas `https://` en dominios
- No es necesario configurar labels manualmente
- La aplicación sirve archivos estáticos con `serve`
- El contenedor escucha en puerto 3000 internamente
- Traefik maneja el proxy desde puertos 80/443 externos
