ARG PHP_VERSION=""
FROM php:${PHP_VERSION:+${PHP_VERSION}-}fpm-alpine

RUN apk update; \
    apk upgrade;

RUN docker-php-ext-install mysqli pdo_mysql

RUN apk add --no-cache bash

CMD cp /usr/local/etc/php/php.ini-development /usr/local/etc/php/php.ini