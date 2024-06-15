FROM node:21-alpine

WORKDIR /code

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

CMD ["npm", "run", "serve"]
EXPOSE 3000