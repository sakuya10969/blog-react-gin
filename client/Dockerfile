# Node.jsのベースイメージを指定
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピーして依存関係をインストール
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# ビルド
RUN npm run build

# コンテナが起動する際に実行されるコマンド
CMD ["npm", "start"]

# コンテナ内でReactアプリがリッスンするポートを指定
EXPOSE 3000
