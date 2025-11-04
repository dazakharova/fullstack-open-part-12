FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV VITE_BACKEND_URL=/api

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]