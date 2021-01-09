# ----BASE----
FROM alpine AS base
RUN apk add --no-cache nodejs
WORKDIR /app
COPY . .

# 
# ----DEPENDENCIES----
FROM base AS dependencies
RUN apk add --no-cache npm
RUN npm install --production

# 
# ----RELEASE----
FROM base AS release
COPY --from=dependencies /app/node_modules ./node_modules
CMD [ "node", "index.js" ]