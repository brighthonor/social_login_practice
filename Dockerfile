# ./Dockerfile 
FROM node:16.13.1-alpine3.14
USER root
WORKDIR /app/frontend
ENV TZ=Asia/Seoul

EXPOSE 3000

## Install packages
COPY package.json ./
RUN yarn install

COPY . .
RUN yarn build

RUN yarn global add serve

CMD serve -s build