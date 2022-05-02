FROM node:14.15.4

WORKDIR /api

COPY package.json package-lock.json /api/

RUN npm install

COPY . /api

CMD ["npm", "run", "start"]