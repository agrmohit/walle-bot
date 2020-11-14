FROM alpine
RUN apk update && apk add nodejs npm
WORKDIR /usr/src/app
COPY . .
RUN npm install --production
CMD [ "node", "index.js"]