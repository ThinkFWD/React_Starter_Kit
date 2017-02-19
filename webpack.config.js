const path = require('path');
 
module.exports = {
  //directory to your client-side javascript folder
  context: path.join(__dirname, 'src'),
  // this is the entry point for your application
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  // This specifies the rules in which you want to bundle your package
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  // Where webpack looks for libraries that you need for your application
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};