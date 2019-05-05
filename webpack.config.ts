import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  target: 'node',
  mode: "development",
  entry: './hello.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [],
  externals: ['electron']
}

export default config;
