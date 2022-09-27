FROM node:18-alpine3.15

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock  /usr/src/app/
RUN yarn install --prod

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "yarn", "start" ]