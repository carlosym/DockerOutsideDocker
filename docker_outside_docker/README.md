# Docker Outside Docker

This project contains the necessary image to be able to execute docker outside docker. The folder also contains some useful scripts to build the image, run a container, remove container and remove image.

If you feel lost please go to the root readme to know about the project.

## Interesting links

Links:
* Getting started with Docker: https://docs.docker.com/get-started/
* Cool tutorials about Docker by **Romin irani**: https://rominirani.com/docker-tutorial-series-a7e6ff90a023


## Requirements in your host machine

You will need to have installed the following technologies:

 * Docker : https://docs.docker.com/engine/installation/
 * Git : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Docker Outside Docker contains:

 * build.sh
 * Dockerfile
 * rm_container.sh
 * rm_image.sh
 * run.sh

# Executing commands

## Enabling executable rights to the user for all the scripts

`chmod 777 *`

After this command you will be able to execute all the commands you need. Is important to be in the folder where the scripts are.

## Docker: Build the image

`./build.sh`

## Docker: Create and run the container

`./run.sh`

### What is inside the script?

`docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8081 --name ciengine carlosym1/docker_outside_docker`

Parameters:

* ( -it ) --> Run container in interactive mode
* ( --rm ) --> Remove volume and container after being executed
* ( -v docker_path_host/docker.sock:/var/run/docker.sock ) --> Mounting a volume from host machine with the docker socket. Please change the path for a valid path in your host machine
* ( -p ) exposing the container with the port 8080
* ( --name ciengine ) name of the container

## Docker: Remove container

`./rm_container.sh`

## Docker: Remove image

`./rm_image.sh`