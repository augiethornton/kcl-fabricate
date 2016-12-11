FROM instructure/node:6

USER root

ENV APP_HOME /usr/src/app/

COPY . $APP_HOME

RUN npm install

RUN chown -R docker:docker $APP_HOME

USER docker
