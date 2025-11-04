FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV VITE_BACKEND_URL=/api

CMD ["npm", "run", "dev", "--", "--host"]