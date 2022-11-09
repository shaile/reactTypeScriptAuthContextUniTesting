# pull official base image
FROM node:lts-alpine as build
ENV NODE_ENV=devlopment
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
COPY craco.config.js ./
RUN npm install -f --silent
RUN npm install react-scripts@3.4.1 -g --silent
 # add app
COPY . ./
# create build
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
