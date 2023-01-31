#Using lightweight NodeJS alpine image
FROM node:12.13.0-alpine    

# Create app directory
RUN mkdir -p /home/node/app/

# Defining Working Dir
WORKDIR /home/node/app

# Ensure both package.json AND pafreeplan.jsonckage-lock.json are copied
COPY package*.json /home/node/app/

COPY . /home/node/app/

EXPOSE 3000

# Install app dependencies
RUN npm install

#Command to start the app
ENTRYPOINT ["npm", "start"]