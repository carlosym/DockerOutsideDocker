FROM ubuntu:14.04

MAINTAINER Carlos Yagüe, carlos.yague@upf.edu

RUN mkdir /home/app
RUN mkdir /home/out

WORKDIR /home/

ADD . ./app

# Do basic updates
RUN apt-get update -q && apt-get clean

# Get curl in order to download curl
RUN apt-get install curl -y 

# Install the version of Node.js we need.
RUN bash -c 'curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -'
RUN apt-get install -y nodejs

VOLUME /home/out

CMD ["node","app/docker_writter.js"]