FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

COPY . .

RUN npm ci

RUN npm run tsc

ENV DEBUG=playground:*

EXPOSE 3001

CMD ["npm", "run", "start"]