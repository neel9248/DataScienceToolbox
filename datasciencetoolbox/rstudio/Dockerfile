# FROM ubuntu:20.10

# WORKDIR /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/rstudio

# ENV PATH /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/node_modules/.bin:$PATH

# # RUN apt install gdebi

# # RUN gdebi rstudio-1.2.5042-amd64.deb
# ENV TZ=America/New_York
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# RUN    apt-get -y update 
# RUN    apt-get -y install gdebi-core
# RUN    apt -y install wget
# # RUN    wget https://download2.rstudio.org/server/bionic/amd64/rstudio-server-1.3.1093-amd64.deb
# # RUN    gdebi rstudio-server-1.3.1093-amd64.deb
# RUN    apt-get -y install r-base
# RUN    apt -y install libnss3
# RUN    apt-get -y install libasound2
# RUN    apt-get -y install libegl1
# RUN    apt-get -y install libqt5core5a libqt5svg5 libqt5webenginecore5 libqt5webengine5 libqt5webenginewidgets5 libqt5x11extras5
# RUN    wget https://download1.rstudio.org/desktop/bionic/amd64/rstudio-1.2.1578-amd64.deb
# RUN    gdebi --n rstudio-1.2.1578-amd64.deb
# RUN    apt -f install

# COPY . ./

# # CMD ["rstudio"]

FROM rocker/rstudio

COPY . ./

