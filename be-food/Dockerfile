FROM node:16-alpine

WORKDIR /food-app

ENV NODE_ENV=development \
    MONGO_URL=mongodb://minhtuan:12345678@localhost:27017 \
    MONGO_DB_NAME=food 

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
