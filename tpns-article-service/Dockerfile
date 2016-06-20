FROM java:8

VOLUME /tmp

ADD target/tpns-article-service.jar app.jar

ADD dockerfiles/run.sh /run.sh

RUN bash -c 'touch /app.jar'

EXPOSE 8080
EXPOSE 5005

CMD ["bash","./run.sh"]