FROM node:18 

RUN apt-get update \
  && export DEBIAN_FRONTEND=noninteractive \
  && npm install --location=global npm@latest \ 
  && useradd -ms /bin/bash vscode
