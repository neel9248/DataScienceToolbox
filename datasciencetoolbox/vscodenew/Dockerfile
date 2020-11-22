# the base miniconda3 image
FROM continuumio/miniconda3:latest

# load in the environment.yml file - this file controls what Python packages we install
ADD environment.yml /

# install the Python packages we specified into the base environment
RUN conda update -n base conda -y && conda env update

# download the coder binary, untar it, and allow it to be executed
RUN wget https://github.com/cdr/code-server/releases/download/v3.7.2/code-server-3.7.2-linux-amd64.tar.gz \
    && tar -xzvf code-server-3.7.2-linux-amd64.tar.gz && chmod +x code-server-3.7.2-linux-amd64/code-server

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh

ADD ./code /code

ENTRYPOINT ["docker-entrypoint.sh"]