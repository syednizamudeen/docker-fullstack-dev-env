ARG APACHE_VERSION=""
FROM httpd:${APACHE_VERSION:+${APACHE_VERSION}-}alpine

RUN apk update; \
    apk upgrade; \
    apk add openssl

# Copy apache vhost file to proxy php requests to php-fpm container
COPY demo.apache.conf /usr/local/apache2/conf/demo.apache.conf
RUN echo "Include /usr/local/apache2/conf/demo.apache.conf" \
    >> /usr/local/apache2/conf/httpd.conf

COPY v3.ext /usr/local/apache2/conf/v3.ext

# Generate CA key and cert:
RUN openssl genrsa -out ./conf/rootCA.key 2048
RUN openssl req -x509 -new -key ./conf/rootCA.key -days 3650 -out ./conf/rootCA.pem -subj "/C=SG/ST=Singapore/L=Singapore/O=Mazin/OU=MazinTech/CN=localhost/emailAddress=mazin@email.com"

# Generate server key and csr:
RUN openssl req -new -sha256 -nodes -out ./conf/server.csr -newkey rsa:2048 -keyout ./conf/server.key -subj "/C=SG/ST=Singapore/L=Singapore/O=Docker/OU=DockerImage/CN=localhost/emailAddress=your@email.com"
RUN openssl x509 -req -in ./conf/server.csr -CA ./conf/rootCA.pem -CAkey ./conf/rootCA.key -CAcreateserial -out ./conf/server.crt -days 500 -sha256 -extfile ./conf/v3.ext

RUN openssl verify -verbose -CAfile ./conf/rootCA.pem ./conf/server.crt