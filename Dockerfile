
# Part 1 - Build Frontend Project + assets

# this is the same as current local Node version, but alpine variety
FROM node:14.3.0-alpine as build

# a test comment to trigger re-deploy

WORKDIR /app
COPY package*.json ./
#COPY gatsby*.json ./
#RUN apk add --no-cache \
#  autoconf \
#  aclocal
#ENV BUILD_DEPS autoconf file gcc libc-dev make g++ pkgconf re2c git

#RUN apt-get update && apt-get install -y \
#  autoconf \
#  libtool \
#  && rm -rf /var/lib/apt/lists/*

#RUN apk add --update --no-cache --virtual .build-deps $BUILD_DEPS
#RUN apk add --no-cache --virtual .php-build-deps \
#  libsodium \
#  freetype-dev \
#  libmcrypt-dev \
#  postgresql-dev  \
#  libxml2-dev  \
#  libzip-dev \
#  libcurl \
#  libpng-dev \
#  autoconf \
#  libtool \
#  nasm \
#  zlib-dev cyrus-sasl-dev libmemcached-dev

#RUN \
#  apk add --no-cache python make g++ && \
#  apk add vips-dev fftw-dev --update-cache \
#  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
#  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
#  && rm -fR /var/cache/apk/*

#RUN apk update && apk upgrade && \
#  apk add --no-cache bash git openssh
#RUN apk add --update npm
#RUN apk add --no-cache --virtual .gyp python make g++

RUN apk add --no-cache --virtual .gyp python make nasm automake autoconf libtool dpkg pkgconfig libpng libpng-dev g++


RUN npm install -g gatsby-cli
RUN npm install
COPY . .
RUN gatsby clean
RUN gatsby build
# do i need to serve it?  It's static right so nginx serves it?  I know this is needed locally to test prod, brain freeze...
#RUN gatsby serve

# Part 2 - Serve Frontend

# Brotli's deal is it gives better compression than Gzip, this nginx image has "Stable nginx with Google Brotli compression module, based on Alpine "
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
