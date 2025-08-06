# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Production stage - Use nginx for serving static files
FROM nginx:alpine AS runner

# Copy built static files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
