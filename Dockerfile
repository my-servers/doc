FROM nginx:latest
COPY  /home/runner/work/doc/doc/build /web_file

ENV TZ Asia/Shanghai

