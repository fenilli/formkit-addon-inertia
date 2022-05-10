ARG NODE_IMAGE=node:16-alpine

FROM ${NODE_IMAGE} as base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base as dependencies
COPY --chown=node:node ./package*.json ./
COPY --chown=node:node . .
