FROM node:14.15.4

RUN npm install -g @angular/cli

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . /app

CMD ["npm", "run", "start"]