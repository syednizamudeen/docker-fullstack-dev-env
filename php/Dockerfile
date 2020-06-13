ARG PHP_VERSION=""
FROM php:${PHP_VERSION:+${PHP_VERSION}-}fpm-alpine

RUN apk update; \
    apk upgrade;

RUN apk add libxml2-dev gettext-dev git && git config --global user.name "Mazin Deys" && git config --global user.email dmazin@example.com

RUN docker-php-ext-install mysqli pdo_mysql bcmath xml gettext && docker-php-ext-enable pdo_mysql

RUN apk add --no-cache freetype \
  libpng \
  libjpeg-turbo \
  freetype-dev \
  libpng-dev \
  libjpeg-turbo-dev && \
  docker-php-ext-configure gd --with-freetype --with-jpeg && \
  docker-php-ext-install -j$(nproc) gd && \
  apk del --no-cache freetype-dev libpng-dev libjpeg-turbo-dev

RUN apk add --no-cache libzip-dev && \
  docker-php-ext-configure zip && \
  docker-php-ext-install zip

RUN apk add --no-cache bash vim

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN php -r "unlink('composer-setup.php');"

#CMD php artisan serve --host=0.0.0.0 --port=8181
#EXPOSE 8181
