# Multi-stage Dockerfile for Client (Development + Production)
FROM node:24-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

# Build arguments for environment variables
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN npm run build

# Development stage
FROM node:24-alpine as development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

# Build arguments for development stage
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Production stage
FROM nginx:alpine as production

# Install curl for health checks
RUN apk --no-cache add curl

# Copy built application
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost/health && nginx -t || exit 1

CMD ["nginx", "-g", "daemon off;"]