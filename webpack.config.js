const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/, // Обрабатываем файлы с расширением .css
        use: [
          'style-loader', // Вставляет CSS в DOM
          'css-loader',   // Позволяет импортировать CSS в JavaScript
        ],
      },
    ],
  },
};