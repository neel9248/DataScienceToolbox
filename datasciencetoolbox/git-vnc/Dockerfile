FROM consol/ubuntu-xfce-vnc
USER root
RUN apt-get update && apt-get install -y git
# RUN apt-get install -y xfce4-terminal software-properties-common python-numpy gnome-shell ubuntu-gnome-desktop
# RUN apt-get install -y gnome-shell ubuntu-gnome-desktop
ENV VNC_COL_DEPTH 24
ENV VNC_RESOLUTION 1920x1080
ENV VNC_PW git
ENV VNC_PORT=5901 \
    NO_VNC_PORT=6901
EXPOSE $VNC_PORT $NO_VNC_PORT
ENTRYPOINT ["/dockerstartup/vnc_startup.sh"]
CMD ["--tail-log"]