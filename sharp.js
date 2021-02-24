const fs = require('fs');         // ファイル操作モジュール
const sharp = require('sharp');   // 画像操作モジュール

// 元ファイル一覧の取得
const files = fs.readdirSync('./src/img', { withFileTypes: false });

// ファイル回数分 反復処理
files.map(file => {
  sharp(`./src/img/${file}`)
    .webp({quality: 80})
    .toFile(`./dist/img/${file}.webp`, (err, info) => {
      if (err) { throw err; }
      console.log(file + ' Done (´-ω-`)');
    })
})