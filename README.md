# 天樹祭HP テンプレート

このプロジェクトは、天樹祭のHPを作成するためのテンプレートです。
[天樹祭HP](https://tenjusai.jp)は、天樹祭実行委員会が運営している豊田工業大学大学祭の公式HPです。

このテンプレートは、[shadcn-ui-base](https://github.com/nishide-dev/nextjs-ui-base/tree/main/shadcn-ui-base)をベースに作成されています。

## 開発

### 使用技術

#### UIコンポーネント

- [shadcn/ui](https://ui.shadcn.com/)
- [cult/ui](https://www.cult-ui.com/docs/components/text-animate)
- [Aceternity UI](https://ui.aceternity.com/components/glare-card)

#### Free Image

- [Unsplash](https://unsplash.com/ja)

### 事前準備

`git`と`node.js`がインストールされていることを確認してください。このプロジェクトではパッケージ管理を`yarn`で行っています。以下のコマンドでインストールしてください。

```bash
npm install -g yarn
```

### プロジェクトのセットアップ

```bash
# プロジェクトのクローン
git clone https://github.com/nishide-dev/tenjusai-template.git

# プロジェクトディレクトリへ移動
cd tenjusai-template

# .envファイルの作成 -> 環境変数の設定
cp .env.example .env

# パッケージのインストール
yarn install

# 開発サーバーの起動
yarn dev

# ビルド
yarn build

# ビルドしたアプリケーションの起動
yarn start
```
