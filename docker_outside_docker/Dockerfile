FROM ubuntu:14.04

MAINTAINER Carlos Yagüe, carlos.yague@upf.edu

RUN mkdir /home/apps
RUN mkdir /home/docker_outside_docker_experiments

WORKDIR /home/

ADD src ./apps

# Do basic updates
RUN apt-get update -q && apt-get clean

# Get curl in order to download curl
RUN apt-get install curl -y 

# Install the version of Node.js we need.
RUN bash -c 'curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -'
RUN apt-get install -y nodejs

# Add and install Docker
ENV DOCKER_REFRESHED_AT=2016-05-26T00:44-0500
RUN apt-get install -qqy curl apt-transport-https
RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 \
  --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
RUN echo deb https://apt.dockerproject.org/repo ubuntu-trusty main \
  > /etc/apt/sources.list.d/docker.list
RUN apt-get update -qq && apt-get install -qqy docker-engine

#Define additional metadata for our image
VOLUME /var/run/docker
VOLUME /home/docker_outside_docker_experiments

EXPOSE 8081
ENV PORT 8081