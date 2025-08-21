FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev || npm i --omit=dev

COPY server ./server
COPY projects ./projects
COPY README.md ./README.md

ENV NODE_ENV=production \
    PORT=8080 \
    UPLOAD_DIR=/data/uploads \
    MAX_STATE_BYTES=262144

EXPOSE 8080

CMD ["node", "server/index.js"]


