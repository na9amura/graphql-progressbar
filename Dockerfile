FROM node:12-alpine
RUN apk update && \
  apk upgrade && \
  apk --no-cache add --update yarn
  # yarn install
EXPOSE 3000 4000
