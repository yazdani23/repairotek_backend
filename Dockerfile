FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package.json package-lock.json ./

RUN npm install

COPY .env .env

EXPOSE 3000

CMD ["npm", "dev"]
