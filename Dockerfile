#stage 1
FROM node:latest as node
# FROM node:alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
# FROM nginx:stable-alpine
COPY --from=node /app/dist/admin-ucac-dashboard /usr/share/nginx/html