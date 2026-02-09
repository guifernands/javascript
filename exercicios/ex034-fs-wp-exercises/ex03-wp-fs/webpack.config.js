const path = require('path');

module.exports = {
  mode: 'development',        // Modo desenvolvedor (código legível)
  entry: './src/index.js',    // Onde começa o seu app
  output: {
    filename: 'bundle.js',    // Nome que QUEREMOS (não o main.js)
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
  },
};