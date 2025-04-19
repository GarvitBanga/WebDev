FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .
# COPY package*.json ./
# COPY index.js ./


# RUN npm run build

EXPOSE 3000
# till here the image is created
CMD ["node", "index.js"]

# only one command can be run in the dockerfile and it will be executed when the container is created