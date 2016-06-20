#!/bin/sh

mvn -f ../../../../../../tpns-parent/pom.xml clean install docker:build -Dmaven.test.skip=true

