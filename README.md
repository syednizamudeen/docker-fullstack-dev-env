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
_NOTE:- bash to node container; install & run npm_

## Docker Commands

### Run Container
`docker-compose up -d`

### Exit Container  
`docker-compose down`            
_Press (```Ctrl+C```) `^C` to exit Terminal and then Run this Command_

### List All Containers
`docker container ls`

`docker container ls -a`

### Remove Container
`docker container rm <Container ID>`

### List All Images
`docker images`

### Remove Image
`docker image rm <Image ID>`

### Access Terminal/BASH (CLI) Inside Container
`docker container exec -it <Container Name> bash`

### View Logs
`docker logs --details <Container Name>`            
_to See PHP Error Logs: `docker logs -f php`_
### Execute Command/Script in Container                                                                                                     
`docker-compose exec <Container Name> <Command>`                                                  
_Run any Command in Container(CLI): `docker-compose exec php php -m`_

`docker-compose exec <Name in *.yml file> sh -c '<Command 1> && <Command 2> && <Command 3>'`            
_Run commands in CLI: `docker-compose exec php sh -c 'php -m && php -i'`_

### Other Commands FYI
`docker version`

`docker info`

`docker login`

`docker container run -it -p 80:80 nginx`                                                         _Interactive Mode_

`docker pull <Name>`

`docker container run -d -p 8080:80 --name mynginx nginx`                                         _Detached Mode_

`docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql`

`docker container stop mysql`

`docker container rm <Container Name> -f`                                                         _Force Remove Running/Active Container_

`docker container run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html --name nginx-website nginx`   _Attach Local Folder to Container_

`docker ps -a -q | ForEach { docker stop $_ }`    _Stop all containers for windows_

-------------
_Known Issue: mongo container will crash in windows docker. Any with workground for this issue most welcome. Find details in [this link](https://dba.stackexchange.com/questions/186478/mongodb-refuse-to-start-operation-not-permitted)_