FROM harisekhon/hadoop
COPY . ./
RUN yum update; \
    yum -y upgrade; \
    yum install -y vnc4server git python vim wmctrl curl apt-transport-https libasound2
ENV PASSWORD=123456 WIDTH=1920 HEIGHT=1080
RUN dpkg --configure -a
COPY ./noVNC/ /noVNC/

USER root
COPY ./startup.sh /startup.sh



RUN set -eux && \
    chmod 0700 /startup.sh; \
    chmod 0770 -R /noVNC

ENTRYPOINT ["/startup.sh"]