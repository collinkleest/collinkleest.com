FROM node:alpine

WORKDIR /usr/src/app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV DEPLOY_ENV=server

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]