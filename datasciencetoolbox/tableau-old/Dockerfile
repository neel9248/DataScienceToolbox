FROM pvtmert/tableau
RUN yum update; \
    yum -y upgrade; \
    yum install -y tigervnc-server git python vim wmctrl curl apt-transport-https libasound2
ENV PASSWORD=123456 WIDTH=1920 HEIGHT=1080
COPY ./noVNC/ /noVNC/
COPY ./startup.sh /startup.sh
RUN chmod 777 /startup.sh; \
    chmod 777 -R /noVNC
ENTRYPOINT ["/startup.sh"]