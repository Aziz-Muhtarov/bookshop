// webpack.config.js
import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
    filename: 'bundle.js', // Имя выходного файла
    path: resolve(__dirname, 'dist'), // Папка для собранных файлов
};
export const module = {
    rules: [
        {
            test: /\.css$/, // Правило для обработки CSS файлов
            use: ['style-loader', 'css-loader'],
        },
    ],
};
export const mode = 'development';