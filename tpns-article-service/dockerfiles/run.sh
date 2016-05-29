#!/bin/bash
      

function wait_db() {
 sleep 20
}
   
echo "=> Waiting for the database to boot and database to be setup"
wait_db

echo $JAVA_OPTS

java $JAVA_OPTS -jar /app.jar
