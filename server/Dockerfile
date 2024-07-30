FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i --legacy-peer-deps
COPY . .
CMD [ "npm","start" ]