# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /DataScienceToolbox/datasciencetoolbox

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/node_modules/.bin:$PATH
ENV PATH /DataScienceToolbox/datasciencetoolbox/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent


# add app
COPY . ./

# start app
CMD ["npm", "start"]