FROM node:alpine

WORKDIR /usr/src/app

# Enable Corepack for pnpm
RUN corepack enable

# Copy package files and install dependencies in a single layer for caching
COPY package.json pnpm-lock.yaml ./
RUN corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

RUN pnpm install

COPY . .

ENV DEPLOY_ENV=server

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]