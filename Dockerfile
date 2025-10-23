# Multi-stage build for Astro application
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run astro
FROM base AS runner
WORKDIR /app

# Install wget for health checks
RUN apk add --no-cache wget

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 astro

# Copy built application
COPY --from=builder --chown=astro:nodejs /app/dist ./dist
COPY --from=builder --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=astro:nodejs /app/package.json ./package.json

# Create a startup script to handle dynamic port and host configuration
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo 'exec npx astro preview --host "$HOST" --port "$PORT" --allowed-hosts "$ALLOWED_HOSTS"' >> /app/start.sh && \
    chmod +x /app/start.sh && \
    chown astro:nodejs /app/start.sh

USER astro

# Expose port (default 4321, configurable via environment)
EXPOSE ${PORT:-4321}

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:${PORT:-4321} || exit 1

# Set environment variables with defaults
ENV PORT=${PORT:-4321}
ENV HOST=${HOST:-0.0.0.0}
ENV ALLOWED_HOSTS=${ALLOWED_HOSTS:-localhost}

CMD ["/app/start.sh"]
