# ----BASE----
FROM alpine AS base
RUN apk add nodejs
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]

# 
# ----DEPENDENCIES----
FROM base AS dependencies
RUN apk add npm
RUN npm install --production

# 
# ----RELEASE----
FROM base AS release
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
CMD [ "node", "index.js" ]