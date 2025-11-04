# Build stage
FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test:ci

ENV VITE_BACKEND_URL=/api

RUN npm run build

# Runtime stage
FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html