
# Part 1 - Build Frontend Project + assets

# this is the same as current local Node version, but alpine variety
FROM node:14.3.0-alpine as build

# a test comment to trigger re-deploy

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g gatsby-cli
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
