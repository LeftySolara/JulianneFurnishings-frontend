FROM node:18-alpine AS dev
ENV NODE_ENV development

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "start"]