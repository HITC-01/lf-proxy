# importing a node library for base image
FROM node:7.6-alpine

RUN mkdir -p /src/lf-proxy

WORKDIR /src/lf-proxy

COPY . /src/lf-proxy

RUN npm install --production

# For running nodemon for DEV
#RUN npm install --global nodemon

EXPOSE 3000

# for DEV run with nodemon
#CMD ["npm", "run", "start:docker"]

# for production
CMD ["npm", "start"]
