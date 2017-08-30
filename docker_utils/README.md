# Docker Utils

This project collect a set of Docker commands, useful for our day to day when we are using Docker. 

When someone is starting learning something new sometimes is hard to remember the sintax of the language or the commands to execute given one technology. The **goal of this project** is just to be a place to remind the simple Docker commands to start playing with this cool technology.

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

 * docker_clean_all.sh
 * docker_containers_clean_all.sh
 * docker_containers_running_show_all.sh
 * docker_containers_show_all.sh
 * docker_images_clean_all.sh
 * docker_images_clean_all_untagged.sh
 * docker_images_show_all.sh
 * docker_volumes_clean_all.sh
 * docker_volumes_show_all.sh

# Executing commands

## Enabling executable rights to the user for all the scripts

`chmod 777 *`

After this command you will be able to execute all the commands you need. Is important to be in the folder where the scripts are.

## Docker: Show images

Adding execution rigths to the user:

`chmod 777 docker_images_show_all.sh`

Execute script:

`./docker_images_show_all.sh`

## Docker: Clean images

Adding execution rigths to the user:

`chmod 777 docker_containers_clean_all.sh`

`chmod 777 docker_images_clean_all.sh`

Execute script:

`./docker_images_clean_all.sh`

## Docker: Clean all untagged images

Adding execution rigths to the user:

`chmod 777 docker_images_clean_all_untagged.sh`

Execute script:

`./docker_images_clean_all_untagged.sh`

## Docker: Show containers that are running in the host machine

Adding execution rigths to the user:

`chmod 777 docker_containers_running_show_all.sh`

Execute script:

`./docker_containers_running_show_all.sh`


## Docker: Show containers ( running or stopped )

Adding execution rigths to the user:

`chmod 777 docker_containers_show_all.sh`

Execute script:

`./docker_containers_show_all.sh`

## Docker: Clean all containers

Adding execution rigths to the user:

`chmod 777 docker_containers_clean_all.sh`

Execute script:

`./docker_containers_clean_all.sh`

## Docker: Show volumes

Adding execution rigths to the user:

`chmod 777 docker_volumes_show_all.sh`

Execute script:

`./docker_volumes_show_all.sh`

## Docker: Clean all volumes

Adding execution rigths to the user:

`chmod 777 docker_volumes_clean_all.sh`

Execute script:

`./docker_volumes_clean_all.sh`

## Docker: Clean all

Adding execution rigths to the user:

`chmod 777 docker_volumes_clean_all.sh`

`chmod 777 docker_containers_clean_all.sh`

`chmod 777 docker_images_clean_all.sh`

`chmod 777 docker_clean_all.sh`

Execute script:

`./docker_clean_all.sh`




