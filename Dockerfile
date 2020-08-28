FROM node:14.8.0-stretch
EXPOSE 80
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app 
CMD ["npm", "start"]