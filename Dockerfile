# first stage: build
FROM node:14-alpine AS builder
WORKDIR /var/www/PUMPED-api
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# second stage: deploy
FROM node:14-alpine AS deploy
ENV NODE_ENV production
WORKDIR /var/www/PUMPED-api
COPY --from=builder /var/www/PUMPED-api/build ./build
COPY package.json yarn.lock ./
RUN yarn install
COPY SQL ./SQL/
CMD yarn start
EXPOSE 5000