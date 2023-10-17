FROM nginx:latest
COPY  /home/runner/work/doc/doc/build /web_file
COPY  /home/runner/work/doc/doc/nginx.conf /etc/nginx/nginx.conf
COPY  /home/runner/work/doc/doc/myservers.conf /etc/nginx/conf.d/

ENV TZ Asia/Shanghai

