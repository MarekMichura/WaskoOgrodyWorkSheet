# Etap 1: Base
FROM node:16-alpine AS client-base
WORKDIR /app
RUN mkdir build
COPY tsconfig.json ./
COPY package*.json ./
RUN npm install

# Etap 2: Development
FROM client-base AS client-development
WORKDIR /app
EXPOSE 3000
CMD ["npm", "start"]

# Etap 3: Build
FROM client-base AS client-build
WORKDIR /app
COPY . .
RUN npm run build