FROM node:alpine as build
EXPOSE 8000

RUN apk add --no-cache python make g++ \
  && apk add vips-dev fftw-dev build-base \
  --update-cache \
  --repository https://alpine.global.ssl.fastly.net/alpine/edge/community \
  --repository https://alpine.global.ssl.fastly.net/alpine/edge/main \
  && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli yarn

WORKDIR /usr/src/app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
RUN yarn build

# Starts and Serves Web Page
FROM nginx:latest as serve
EXPOSE 80
COPY --from=build /usr/src/app/public /usr/share/nginx/html
# COPY --from=build /usr/src/app/package* ./

# CMD ["sh", "-c", "yarn build && yarn serve -H 0.0.0.0"]