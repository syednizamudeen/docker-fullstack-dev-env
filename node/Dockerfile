ARG NODE_VERSION=""
FROM node:${NODE_VERSION:+${NODE_VERSION}-}alpine

RUN apk update; \
    apk upgrade;

RUN apk add --no-cache bash vim

# Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY ./app/package*.json ./

RUN node -v
# RUN npm install --quiet
# RUN npm -v
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
#COPY . .
# COPY ./app/ .

EXPOSE 3000
# CMD [ "npm", "start" ]