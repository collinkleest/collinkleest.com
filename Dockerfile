FROM node:20

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV DEPLOY_ENV=server

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]