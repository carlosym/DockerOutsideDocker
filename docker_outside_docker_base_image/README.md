# Docker outside Docker base image

This folder contains the basic, simple and easyest Docker image to be able to execute Docker inside a Docker. In the *docker_outside_docker/Dockerfile* there were some libraries such as node.js useful to perform the diferent test. In this case we don't neet to install extra libraries, add specific volumes, add files etc.

If you want to reuse this Docker image this is your place ;). 

## Interesting links

Links:
* Getting started with Docker: https://docs.docker.com/get-started/
* Cool tutorials about Docker by **Romin irani**: https://rominirani.com/docker-tutorial-series-a7e6ff90a023
* My Docker Cheat Sheet by **Aymen El amri** :https://medium.com/statuscode/dockercheatsheet-9730ce03630d

## Requirements in your host machine

You will need to have installed the following technologies:

 * Docker : https://docs.docker.com/engine/installation/
 * Git : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Clone repository

`git clone https://github.com/carlosym/DockerOutsideDocker.git`

# Docker utils contains:

 * build.sh
 * Dockerfile
 * rm_container.sh
 * rm_image.sh
 * run.sh

# Executing commands

## Enabling executable rights to the user for all the scripts

`chmod 777 *`

After this command you will be able to execute all the commands you need. Is important to be in the folder where the scripts are.

## Docker: Building the image

`./build.sh`

## Docker: Create and run the container

`./run.sh`

### What is inside the script?

`docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock --name docker_outside_docker carlosym1/docker_outside_docker_base_image`

Parameters:

* ( --rm ) --> Remove volume and container after being executed
* ( -v path ) --> Mounting a volume from host machine. Here we are linking the Docker socket of the Host machine with the Docker socket of the current Docker container, with this we will be able to execute docker outside docker.
* ( --name dicom_ecg_extraction ) name of the container

## Docker: Remove the container

`./rm_container.sh`

## Docker: Remove the image

`./rm_image.sh`