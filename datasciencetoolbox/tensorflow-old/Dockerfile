FROM tensorflow/tensorflow

RUN apt-get update; \
    apt-get -y upgrade; \
    apt-get install -y vnc4server git python vim wmctrl curl apt-transport-https libasound2
ENV PASSWORD=123456 WIDTH=1920 HEIGHT=1080
COPY ./noVNC/ /noVNC/
COPY ./startup.sh /startup.sh
RUN chmod 777 /startup.sh; \
    chmod 777 -R /noVNC 
ENTRYPOINT ["/startup.sh"]
