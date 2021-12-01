FROM node:16

WORKDIR /tmp/build
COPY package.json yarn.lock ./
RUN yarn
COPY ./ ./
RUN yarn build

CMD [ "yarn", "start" ]