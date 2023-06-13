FROM node:18-alpine AS base
WORKDIR /app
COPY package.json .
EXPOSE 5173

FROM base AS test
ENV NODE_ENV test
RUN npm install
COPY . .
RUN npm run test

FROM base AS dev
ENV NODE_ENV development
RUN npm install
COPY . .
CMD ["npm", "start"]

FROM base AS prod
ENV NODE_ENV production
RUN npm ci --production
COPY . .
CMD ["npm", "start"]