FROM node:slim

ENV PORT 3000

WORKDIR /qrcode-service

COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

CMD [ "node", "./dist/index.js" ]