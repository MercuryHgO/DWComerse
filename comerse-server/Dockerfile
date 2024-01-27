FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

RUN npm install

RUN npm run build

#RUN npx prisma migrate dev

CMD ["npm", "run", "dev"]