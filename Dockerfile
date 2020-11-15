FROM alpine
ENV NODE_ENV=production

WORKDIR /app

RUN apk update && apk add nodejs npm

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js"]
