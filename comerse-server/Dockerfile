FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

RUN npm install

RUN npm run build

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && npm run app"]
#CMD ["sh", "-c", "npm run app"]
