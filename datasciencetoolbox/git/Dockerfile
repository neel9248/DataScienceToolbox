FROM alpine:3.5

WORKDIR /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/git

ENV PATH /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/node_modules/.bin:$PATH

RUN apk update
RUN apk add git

COPY . ./
