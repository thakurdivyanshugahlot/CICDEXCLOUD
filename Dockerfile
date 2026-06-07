FROM node:24-alpine

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY server.js server.js

RUN npm install

CMD ["node" , "server"]
