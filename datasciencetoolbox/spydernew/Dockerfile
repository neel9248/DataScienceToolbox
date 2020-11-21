FROM python:3.9.0-buster

# RUN    apt-get -y update 
# RUN    apt-get -y install python3
# RUN    apt-get -y install python3-pip

# ADD ./spyder_desktop.py /

# RUN pip install pystrich

COPY . ./

ENTRYPOINT [ "python", "spyder_desktop.py", "-p" ]
# CMD ["python", "./hello.py"]

# CMD [ "python", "./spyder_desktop.py","-p" ]

