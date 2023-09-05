FROM node:20.5.1-alpine3.18 as build
LABEL authors="jaykim"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --slient
RUN npm install react-scripts@5.0.1 -g --slient

COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx","-g", "daemon off;"]