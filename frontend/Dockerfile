FROM node:18.12.1-alpine

WORKDIR /frontend

# 소스 코드 복사
COPY package.json yarn.lock ./
#EXPOSE 5173
RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]