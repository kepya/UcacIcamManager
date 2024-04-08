FROM node:latest as build
WORKDIR /app
COPY ./package.json /app/
RUN npm install --legacy-peer-deps
COPY . /app/
RUN npm run build

FROM nginx:latest AS client-browser
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/admin-ucac-dashboard/ /usr/share/nginx/html
EXPOSE 80
