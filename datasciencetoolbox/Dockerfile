# pull official base image
FROM node:13.12.0-alpine

# set working directory
# WORKDIR /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/node_modules/.bin:$PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

RUN    apt-get -y update 
RUN    apt-get -y install python3

# add app
COPY . ./

# start app
CMD ["npm", "start"]