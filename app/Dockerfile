FROM node:22-alpine

WORKDIR /app

COPY backEnd/package*.json ./backEnd/

WORKDIR /app/backEnd

RUN npm install

WORKDIR /app

COPY . .

RUN chown -R node:node /app

USER node 

WORKDIR /app/backEnd

EXPOSE 3000

CMD ["npm" , "start"]