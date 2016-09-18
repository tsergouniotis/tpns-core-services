FROM nginx
MAINTAINER  Panos Zografos
#EXPOSE  80

# use this to change nginx configuration
# COPY conf/nginx.conf /etc/nginx/nginx.conf

RUN apt-get update
RUN apt-get install -y vim

COPY *-module /usr/share/nginx/html/tpns/

