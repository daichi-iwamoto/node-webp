# node-webp

nodeで画像をwebpに変更するモジュール

## 使用方法

`/src/img/`内で画像が追加・変更が行われると  
`/dist/img/`に`webp`化された画像が出力されます

下記コマンドを実行後に、`webp`化したい画像を`/src/img/`に入れてください

```bash=
# モジュールインストール
npm i

# 実行
npm run webp
```

実行内容は`/imagemin.js`に記載されています  
クオリティ等変更する場合はこちらを確認してください
