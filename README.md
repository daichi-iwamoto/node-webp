# node-webp

nodeで画像をwebpに変更するモジュール

`/src/img/`内で画像が追加・変更が行われると  
`/dist/img/`に`webp`化された画像が出力されます

※ node.js がインストール済みである事が前提です

## 使用方法

### 1.clone
このリポジトリを任意のディレクトリに`clone`してきてください

### 2.モジュールのインストール(初回のみ)
クローンしてきたディレクトリ直下で、下記コマンドを押下して  
モジュールをインストールしてきてください

```bash=
npm i
```

### 3.監視コマンドを実行
下記コマンドを押下して`webp`化監視コマンドを実行する

```bash=
npm run webp
```

### 4.webp化したい画像を設置
コマンドを実行後に、`webp`化したい画像を`/src/img/`に入れてください

`/dist/img/`に`webp`化された画像が出力されます

実行内容は`/imagemin.js`に記載されています  
クオリティ等変更する場合はこちらを確認してください
