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
* http://localhost:8081 _to view nodejs_<br>
_NOTE:- bash to node container; install & run npm_<br>
* http://localhost:8081 _to view React_<br>
_NOTE:- bash to node container; `npx create-react-app my-app && cd my-app && npm start`_<br>
* http://localhost:4201 _to view Angular_<br>
_NOTE:- `ng serve --host 0.0.0.0`_<br>
* http://localhost:8101 _to view Ionic_<br>
_NOTE:- `ionic serve --external`_<br>
_To use Dockers in Windows PC remove `volumes` from mongo container. See more at bottom._
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

`docker port apache`                                                         _Check Post Mapping_

`docker pull <Name>`

`docker container run -d -p 8080:80 --name mynginx nginx`                                         _Detached Mode_

`docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=123456 mysql`

`docker container stop mysql`

`docker container rm <Container Name> -f`                                                         _Force Remove Running/Active Container_

`docker container run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html --name nginx-website nginx`   _Attach Local Folder to Container_

`docker ps -a -q | ForEach { docker stop $_ }`    _Stop all containers for windows_

-------------
_Known Issue: mongo container will crash in windows docker. Anyone with workground for this issue most welcome. Find details in [this link](https://dba.stackexchange.com/questions/186478/mongodb-refuse-to-start-operation-not-permitted)_
