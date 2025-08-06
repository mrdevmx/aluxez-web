# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Container Labels for Traefik (SSL Configuration)
LABEL traefik.enable=true
LABEL traefik.http.routers.aluxez-web.rule=Host(\`xowww4osssw4oko4ggwo0k0k.154.12.229.178.sslip.io\`)
LABEL traefik.http.routers.aluxez-web.entrypoints=web,websecure
LABEL traefik.http.routers.aluxez-web.tls=true
LABEL traefik.http.routers.aluxez-web.tls.certresolver=letsencrypt
LABEL traefik.http.services.aluxez-web.loadbalancer.server.port=3000
LABEL traefik.http.routers.aluxez-web.middlewares=redirect-to-https
LABEL traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https
LABEL traefik.http.middlewares.redirect-to-https.redirectscheme.permanent=true

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

# Start serving the built files (serve uses -H for host)
CMD ["serve", "-s", "dist", "-l", "3000"]
