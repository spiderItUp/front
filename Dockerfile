FROM node:10

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]

EXPOSE 3000