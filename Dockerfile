FROM node:alpine

EXPOSE 3000

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .

CMD ["npm", "run", "run-prod"]