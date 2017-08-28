./docker_containers_clean_all.sh
docker rmi $(docker images -aq)