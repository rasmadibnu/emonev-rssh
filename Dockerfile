# Build stage
FROM node:22-alpine AS builder

ENV NODE_OPTIONS=--dns-result-order=ipv4first

WORKDIR /app

RUN apk add --no-cache ca-certificates \
 && update-ca-certificates

# Copy package files
COPY package.json yarn.lock ./

RUN yarn config set registry https://registry.npmjs.org \
 && yarn config set network-timeout 600000 \
 && yarn install --frozen-lockfile


# Copy application code
COPY . .


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
