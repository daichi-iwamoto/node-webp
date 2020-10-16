const imagemin = require('imagemin-keep-folder');
const imageminWebp = require('imagemin-webp');

imagemin([process.argv[2]], {
  plugins: [
    imageminWebp()
  ],
  replaceOutputDir: output => {
    return (
      console.log('change ' + process.argv[2] + '...'),
      output.replace(/img\//, '../dist/img/')
    )
  }
}).then(() => {
  console.log('Done (´-ω-`)');
});