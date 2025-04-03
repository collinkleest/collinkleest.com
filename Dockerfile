# Stage 1: Build the Next.js app
FROM node:alpine AS builder

WORKDIR /usr/src/app

# Enable Corepack for pnpm
RUN corepack enable

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Next.js app exporting it to /out folder
RUN pnpm build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy static files from the builder stage
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

# Expose port 80 (Nginx default)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]