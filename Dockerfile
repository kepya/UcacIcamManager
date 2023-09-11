#stage 1
FROM node:latest as node
# FROM node:alpine as node

WORKDIR /app/dist

COPY ./dist/admin-ucac-dashboard /app/dist/admin-ucac-dashboard


#stage 2
FROM nginx:alpine

# FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=node /app/dist/admin-ucac-dashboard /usr/share/nginx/html

# Expose port 80
EXPOSE 80