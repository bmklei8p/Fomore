FROM node:lts-bullseye
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
ENV HOST_OS ${OS}
ENV HOST 0.0.0.0
ENV PUBLIC_URL=http://localhost:3000
ENV REACT_APP_FOMORE_API_HOST=https://fomorebackend.azurewebsites.net
ENV REACT_APP_FOMORE_WS_HOST=ws://fomorebackend.azurewebsites.net
EXPOSE 3000
CMD [ "npx", "serve", "-s", "build" ]