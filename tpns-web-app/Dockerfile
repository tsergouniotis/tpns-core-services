FROM nginx
MAINTAINER  Panos Zografos
#EXPOSE  80

# use this to change nginx configuration
# COPY conf/nginx.conf /etc/nginx/nginx.conf

RUN apt-get update
RUN apt-get install -y vim

COPY access-module /usr/share/nginx/html/tpns/access-module
COPY dashboard-module /usr/share/nginx/html/tpns/dashboard-module
COPY global-module /usr/share/nginx/html/tpns/global-module
COPY user-module /usr/share/nginx/html/tpns/user-module

