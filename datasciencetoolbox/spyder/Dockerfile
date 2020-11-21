# FROM alpine:3.7
# FROM debian:bullseye
FROM compdatasci/spyder-desktop

WORKDIR /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/spyder

ENV PATH /Users/neeltrivedi/code/cs1660/final-project/DataScienceToolbox/datasciencetoolbox/node_modules/.bin:$PATH

# RUN apt-get -y update 
# RUN    apt-get -y update 
# RUN apt-get install -y spyder

# RUN apt-get install libgl1-mesa-glx libegl1-mesa libxrandr2 libxrandr2 libxss1 libxcursor1 libxcomposite1 libasound2 libxi6 libxtst6

# RUN    apt-get -y update 
# RUN    apt-get -y install python3
# RUN    apt-get -y install python3-pip

RUN    curl -s -O https://raw.githubusercontent.com/compdatasci/spyder-desktop/master/spyder_desktop.py
# RUN    pip3 install --upgrade pip
# RUN apt-get -y update

# RUN apt-get install -y build-essential python3.6 python3.6-dev python3-pip python3.6-venv
# RUN    python3 -m pip install pip --upgrade
# # RUN python3 -m pip install spyder
# RUN    pip3 install spyder
# RUN    pip3 install PySide2
# RUN    pip3 install PyQtWebEngine
# RUN apt-get install spyder3

COPY . ./

# CMD ["spyder3"]