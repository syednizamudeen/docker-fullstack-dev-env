# docker-php-dev-env

## Ready to Run

* Apache
* PHP
* Composer
* MySQL
* PhpmyAdmin

## Access via Browser

* http://localhost:82 _to view phpinfo()_
* http://localhost:83 _access Database via phpmyadmin_

## CLI

### Basic
* docker version
* docker info
* docker login
* docker container run -it -p 80:80 nginx                                                         <- Interactive Mode
* docker container ls
* docker container ls -a
* docker container rm <Container ID>
* docker images
* docker image rm <Image ID>
* docker pull <Name>
* docker container run -d -p 8080:80 --name mynginx nginx                                         <- Detached Mode
* docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql
* docker container stop mysql
* docker container rm <container name> -f                                                         <- Force Remove Running/Active Container
* docker container exec -it <container name> bash                                                 <- Access Terminal Inside Container
* docker container run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html --name nginx-website nginx   <- Attach Local Folder to Container
### Run/Exit Containers
* docker-compose up
* docker-compose down                                                                             <- Press (Ctrl+C) ^C to exit Terminal and then Run this Command
### View Logs
* docker logs --details <container name>                                                          <- to See PHP Error Logs: docker logs -f php
### Execute Commands in Container                                                                                                     
* docker-compose exec <container name> <command>                                                  <- Run any Command in Container(CLI): docker-compose exec php php -m
* docker-compose exec  <name in yml> sh -c '<command 1> && <command 2> && <command 3>'            <- Run commands in CLI: docker-compose exec  php sh -c 'php -m && php -i'
* docker ps -a -q | ForEach { docker stop $_ }    <- Stop all containers for windows
