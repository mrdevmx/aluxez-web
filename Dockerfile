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
CMD ["serve", "-s", "dist", "-l", "3000", "--host", "0.0.0.0"]
