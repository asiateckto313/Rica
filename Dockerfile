FROM node:19.4.0

WORKDIR /app

COPY package.json package-lock.json ./

# RUN npm install -g @angular/cli
 
RUN npm install

COPY . .

RUN npm run build 

EXPOSE 4200

CMD [ "npm", "start" ] 