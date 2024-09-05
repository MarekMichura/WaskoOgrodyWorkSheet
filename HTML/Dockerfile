# Etap 1: Base
FROM node:16-alpine AS html-base
WORKDIR /html
RUN mkdir build
COPY tsconfig.json ./
COPY package*.json ./
RUN npm install

# Etap 2: Development
FROM html-base AS html-development
WORKDIR /html
EXPOSE 3000
CMD ["npm", "start"]

# Etap 3: Build
FROM html-base AS html-build
WORKDIR /html
COPY . .
RUN npm run build