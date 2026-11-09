# =============================================================================
# Stage 1 — Build frontend and prepare server dependencies
# =============================================================================
FROM node:24-alpine AS build

# OpenSSL is required by Prisma CLI on Alpine
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package manifests
COPY package.json package-lock.json ./
COPY client/package.json client/package-lock.json ./client/
COPY server/package.json server/package-lock.json ./server/

# Copy Prisma schema and config BEFORE server npm ci so postinstall (prisma generate) succeeds
COPY server/prisma ./server/prisma
COPY server/prisma.config.ts ./server/

# Install dependencies
RUN cd client && npm ci
RUN cd server && npm ci

# Copy application source code
COPY client/ ./client/
COPY server/ ./server/

# Build client React application (CI=false ensures warnings don't fail the build)
ENV CI=false
RUN cd client && npm run build

# Ensure Prisma client is generated with latest schema
RUN cd server && npx prisma generate


# =============================================================================
# Stage 2 — Minimal production runtime
# =============================================================================
FROM node:24-alpine

# OpenSSL is required at runtime by Prisma engine on Alpine
RUN apk add --no-cache openssl

WORKDIR /app

ENV NODE_ENV=production \
    PORT=4000 \
    CLIENT_BUILD_DIR=/app/client/build \
    PATH="/app/server/node_modules/.bin:${PATH}"

# Copy built frontend bundle and server application with dependencies
COPY --from=build --chown=node:node /app/client/build ./client/build
COPY --from=build --chown=node:node /app/server ./server

USER node
EXPOSE 4000

WORKDIR /app/server

# Apply database migrations and start server
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
