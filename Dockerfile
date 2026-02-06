# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Install dependencies (locked & reproducible)
RUN yarn install --frozen-lockfile


# Copy application code
COPY . .

COPY .env .

# Build for SPA production
RUN yarn quasar build

# Production stage
FROM nginx:stable-alpine

# Copy custom Nginx config for SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built SPA application
COPY --from=builder /app/dist/spa /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
