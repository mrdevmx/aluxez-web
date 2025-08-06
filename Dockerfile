# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV VITE_PREVIEW_ALLOWED_HOSTS=all

# Start the application
CMD ["npx", "astro", "preview", "--host", "0.0.0.0", "--port", "3000"]
