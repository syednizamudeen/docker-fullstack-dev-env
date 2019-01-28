## Ready to Run

* Apache
* PHP
* Composer
* MySQL
* PhpmyAdmin
* Node.js

## Browse

* http://localhost:82 _to view phpinfo()_
* http://localhost:83 _for Database access via phpmyadmin_
* http://localhost:8081 _to view nodejs_


## CLI

### Basic
`docker version`

`docker info`

`docker login`

`docker container run -it -p 80:80 nginx`                                                         _Interactive Mode_

`docker container ls`

`docker container ls -a`

`docker container rm <Container ID>`

`docker images`

`docker image rm <Image ID>`

`docker pull <Name>`

`docker container run -d -p 8080:80 --name mynginx nginx`                                         _Detached Mode_

`docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql`

`docker container stop mysql`

`docker container rm <container name> -f`                                                         _Force Remove Running/Active Container_

`docker container exec -it <container name> bash`                                                 _Access Terminal Inside Container_

`docker container run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html --name nginx-website nginx`   _Attach Local Folder to Container_

### Run/Exit Containers
`docker-compose up -d`
  
`docker-compose down` _Press (```Ctrl+C```) `^C` to exit Terminal and then Run this Command_

### View Logs
`docker logs --details <container name>`

_to See PHP Error Logs: `docker logs -f php`_
### Execute Commands in Container                                                                                                     
`docker-compose exec <container name> <command>`                                                  _Run any Command in Container(CLI): `docker-compose exec php php -m`_

`docker-compose exec  <name in yml> sh -c '<command 1> && <command 2> && <command 3>'`            _Run commands in CLI: `docker-compose exec  php sh -c 'php -m && php -i'`_

`docker ps -a -q | ForEach { docker stop $_ }`    _Stop all containers for windows_
