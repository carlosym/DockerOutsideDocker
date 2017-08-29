# Docker outside Docker (Node.js example)

This project shows how you can execute a Docker container outside a Docker Container. I know, I know  this looks really weare "I'm going to run a Docker that is going to run another Docker?" really complex ;). Let's try to implement something and see what happens.

# Goals
* Execute docker from a docker: We will try to achieve the easiest use case that is to execute the hello world image from the current container.
* Execute docker from a docker mounting volumes from the host system.

# Solutions
1. Docker in Docker
2. Docker outside Docker

## 1) Docker in Docker

**Use case:** Docker image with Docker CE installed to be able to execute other Docker images within the parent Docker container.

Links that explain the solution:

1. Link to Docker in Docker (jpetazzo): https://github.com/jpetazzo/dind
2. Using Docker-in-Docker for your CI or testing environment? Think twice (jpetazzo): http://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/

## 2) Docker outside Docker (Sibling Docker containers)

**Use case:** Docker image that allows to execute Docker container in the host machine not the Docker image itself. This means that one container will be able to create sibling containers.

Links that explain the solution:
1. Using Docker-in-Docker for your CI or testing environment? Think twice (jpetazzo): http://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/ (Take a look to the last part of the article)

This solution, will be the solution choosen for solving our problem.

# How we are going to do this?

We will try to run a Docker using Node.js technology.

Requirements in your host machine:
 * Docker 
 * Git
 * Docker outside Docker repository cloned in host machine

# Docker outside Docker contains:

 * data (Sample data folder)
 * docker_filter (Docker image with a filter implementation)
 * docker_outside_docker (Docker image with all the things for executing docker outside docker)
 * docker_utils (A set of useful Docker commands to play with Docker)
 * docker_writter (Docker image with a node.js application that writes files in the file system)

## Interesting articles

Alternative to Docker inside Docker
* https://www.develves.net/blogs/asd/2016-05-27-alternative-to-docker-in-docker/
* https://github.com/JeNeSuisPasDave/example-docker-jenkins
* https://damnhandy.com/2016/03/06/creating-containerized-build-environments-with-the-jenkins-pipeline-plugin-and-docker-well-almost/
* https://engineering.riotgames.com/news/docker-jenkins-data-persists

Managing data with siblings containers
* https://www.digitalocean.com/community/tutorials/how-to-share-data-between-docker-containers
* https://github.com/client9/dmnt
* https://madcoda.com/2016/03/docker-named-volume-explained/
* https://stackoverflow.com/questions/23137544/how-to-map-volume-paths-using-dockers-volumes-from

# Starting to solve the problem

## Cloning the repository

`git clone https://github.com/carlosym/DockerOutsideDocker.git`

`cd root folder`

## Building the docker images

### Docker outside Docker image

Main image (docker_outsise_docker/Dockerfile)

`cd docker_outside_docker`

`chmod 777 *`

`build.sh`

`cd ..`

More info in "docker_outside_docker/README.md"

### Docker writter app

Node.js App that writtes a files in the file system:

`cd docker_writter`

`chmod 777 *`

`build.sh`

`cd ..`

### Docker filter app

Filter in python that process an input and generates an output

`cd docker filter`

`./build.sh`

`cd ..`

## Executing example 1

The first example is just a test to see if we can execute Docker from our Docker container. In this case we have a node.js app (src/example_1) that executes the command *docker run hello-world*

### 1) Execute docker_outside_docker image in interactive mode

`cd docker_outside_docker`

`./run.sh`

If everything it's ok you should be inside the **ciengine** container if not something was wrong with the *(docker_outside_docker/src/example_1)* app, please change the host path with a good one in your host machine in the docker command and rebuild the image. Once this is done execute the `./run.sh` again.

### 2) Execute the example_1.js within **ciengine** container

`node apps/example_1.js `

If everything went ok we saw the message *Hello from Docker!*

`exit` (Exit the Docker image)

:) First Goal DONE :)

## Executing example 2

The second example is a test to see if we can write files in a folder that is in our host machine from a Docker caller from another Docker. This feature will be usefull for our filter in the feature because we will want to generate an output from a given input.

`cd docker_outside_docker`

`./run.sh`

If everything it's ok you should be inside the **ciengine** container if not something was wrong with the *(docker_outside_docker/src/example_3)* app, please change the host path with a good one in your host machine in the docker command and rebuild the image. Once this is done execute the `./run.sh` again.

`node apps/example_2.js`

If everything went ok we saw the message we will be able to see four files in the folder of the host especified in (docker_writter/run.sh) if you have problems read (docker_writter/README.md).

`exit` (Exit the Docker image)

:) Second Goal DONE :)

## Executing example 3

The third example and the last is just to execute a complete filter. An app that get some inputs and generate some outputs.

In this case this container contains a python application that gets an input proces the input and generates an output. The input files are medical ultrasound images with electrical signals. The application will get the files and will segment the electrical signal and will save it as csv file.

`cd docker_outside_docker`

`./run.sh`

If everything it's ok you should be inside the **ciengine** container if not something was wrong with the *(docker_outside_docker/src/example_3)* app, please change the host path with a good one in your host machine in the docker command and rebuild the image. Once this is done execute the `./run.sh` again.

`node apps/example_3.js`

If everything went ok we saw the message we will be able to see four files in the folder of the host especified in (docker_writter/run.sh) if you have problems read (docker_writter/README.md).

`exit` (Exit the Docker image)

:) Third Goal DONE :)

