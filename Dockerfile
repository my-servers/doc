FROM nginx:latest
COPY  build /web_file
COPY  nginx.conf /etc/nginx/nginx.conf
COPY  myservers.conf /etc/nginx/conf.d/

ENV TZ Asia/Shanghai

