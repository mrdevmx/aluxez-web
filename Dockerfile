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

# Start the application
CMD ["npm", "run", "start"]
