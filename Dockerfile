FROM node:10-alpine

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . /usr/app

USER node
