FROM node:22.5.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3005

CMD [ "npm", "start" ]