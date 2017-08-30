# Docker Utils

This project is our first application approach to execute filters within a Docker container. **What is a filter?** It's an application that receive some inputs, process the inputs and generate some outputs.

In this case this container contains a node.js application that writtes four files in a folder mounted in the container as a volume.

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
 * docker_writter.js (Node.js application)
 * Dockerfile
 * run.sh
 * rm_container.sh
 * rm_image.sh

# Executing commands

## Enabling executable rights to the user for all the scripts

`chmod 777 *`

After this command you will be able to execute all the commands you need. Is important to be in the folder where the scripts are.

## Docker: Building the image

`./build.sh`

## Docker: Create and run the container

`./run.sh`

### What is inside the script?

`docker run --rm -v /Users/carlos/Documents/DevOps/Docker_outside_Docker/data/example_2:/home/out --name container_writter carlosym1/docker_writter_example`

Parameters:

* ( --rm ) --> Remove volume and container after being executed
* ( -v path ) --> Mounting a volume from host machine. Please change the path for a valid path in your host machine
* ( --name container_writter ) name of the container

## Docker: Remove the container

`./rm_container.sh`

## Docker: Remove the image

`./rm_image.sh`

