# Docker Filter

This project is our second and final (first:docker_writter) application approach to execute filters within a Docker container. **What is a filter?** It's an application that receive some inputs, process the inputs and generate some outputs.

In this case this container contains a python application that gets an input proces the input and generates an output. The input files are medical ultrasound images with electrical signals. The application will get the files and will segment the electrical signal and will save it as csv file.

## What is this filter expecting?

This filter is expectimg as an input a folder (Ex: data/example_3) with two subfolders (Ex: data/example_3/in, data/example_3/out). 

* data/example_3
* --> data/example_3/in
* --> --> data/example_3/in/image_1.dcm
* --> --> data/example_3/in/image_2.dcm
* --> --> data/example_3/in/image_3.dcm
* --> data/example_3/out

Within the in folder we will put all the input data and once procesed these images the out folder will contain the output

You can find the Docker application in:

* Github:https://github.com/carlosym/rkt_dicom_ecg_extraction
* Docker hub: https://hub.docker.com/r/carlosym1/rkt_dicom_ecg_extraction/

Or you can build the image from 0 following this guide.

## Interesting links

Links:
* Getting started with Docker: https://docs.docker.com/get-started/
* Cool tutorials about Docker by **Romin irani**: https://rominirani.com/docker-tutorial-series-a7e6ff90a023
* Github:https://github.com/carlosym/rkt_dicom_ecg_extraction
* Docker hub: https://hub.docker.com/r/carlosym1/rkt_dicom_ecg_extraction/

## Requirements in your host machine

You will need to have installed the following technologies:

 * Docker : https://docs.docker.com/engine/installation/
 * Git : https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Clone repository

`git clone https://github.com/carlosym/DockerOutsideDocker.git`

# Docker utils contains:

 * build.sh
 * Dockerfile
 * functions.py (Python app)
 * rkt_dicom_ecg_extraction.py (Python app)
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

`docker run --rm -v /Users/carlos/Documents/DevOps/Docker_outside_Docker/data/example_3:/home/data --name dicom_ecg_extraction carlosym1/rkt_dicom_ecg_extraction data/in/ data/out/`

Parameters:

* ( --rm ) --> Remove volume and container after being executed
* ( -v path ) --> Mounting a volume from host machine. Please change the path for a valid path in your host machine. To test put the up to /data/example_3
* ( --name dicom_ecg_extraction ) name of the container

## Docker: Remove the container

`./rm_container.sh`

## Docker: Remove the image

`./rm_image.sh`
