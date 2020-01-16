FROM node:12

WORKDIR /opt
ADD package.json /opt
ADD package-lock.json /opt
RUN npm ci
COPY ./ /opt

ENV NODE_ENV production

RUN npm run build


FROM nginx:stable
COPY --from=0 /opt/dist /usr/share/nginx/html
