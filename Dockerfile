FROM node:18.17.1 AS builder

LABEL stage=nodebuilder

WORKDIR /build
COPY . .
RUN npm install
RUN npm run build


FROM nginx:latest

COPY --from=builder  /build/build /web_file
COPY  nginx.conf /etc/nginx/nginx.conf
COPY  myservers.conf /etc/nginx/conf.d/

ENV TZ Asia/Shanghai

