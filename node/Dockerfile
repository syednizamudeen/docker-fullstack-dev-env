FROM node:12.18.0-alpine

RUN apk update; \
    apk upgrade;

RUN apk add --no-cache bash vim \
        build-base \
        libtool \
        autoconf \
        automake \
        jq \
        openssh \
        python

# Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY ./app/package*.json ./

RUN node --version
# RUN npm install --quiet
RUN npm -v
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
#COPY . .
# COPY ./app/ .

RUN npm install -g @angular/cli@8.3.27
RUN ng --version
RUN npm install -g @ionic/cli
RUN ionic -v


EXPOSE 3000 5000
# CMD [ "npm", "start" ]
