# ベースイメージとしてGoを指定
FROM golang:1.22-alpine

# 作業ディレクトリを設定
WORKDIR /app

# 必要な依存パッケージをインストール
COPY go.mod go.sum ./
RUN go mod download

# ソースコードとスクリプトをコピー
COPY . .
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# ビルド
RUN go build -o main .

# コンテナが起動する際に実行されるコマンド
CMD ["/wait-for-it.sh", "db:5432", "--", "./main"]

# コンテナ内でGinがリッスンするポートを指定
EXPOSE 8080