FROM node:18.12.1-alpine

WORKDIR /frontend

# 소스 코드 복사
COPY ./package.json ./
#EXPOSE 5173

COPY . ./

RUN yarn
RUN yarn add typescript
RUN yarn build
#CMD ["yarn",  "build"]
