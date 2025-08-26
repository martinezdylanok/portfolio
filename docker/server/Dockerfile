# Multi-stage Dockerfile for Server (Development + Production)
FROM node:24-alpine as builder
WORKDIR /app
COPY packages/server/package*.json ./
RUN npm install
COPY packages/server/ ./

# Build arguments for environment variables
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

RUN npm run build

# Development stage
FROM node:24-alpine as development
WORKDIR /app
COPY packages/server/package*.json ./
RUN npm install
COPY packages/server/ ./

# Build arguments for development stage
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage
FROM node:24-alpine as production
WORKDIR /app

# Install curl for health checks
RUN apk --no-cache add curl

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/projects || exit 1

CMD ["npm", "start"]