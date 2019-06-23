const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'url-loader',
          'image-webpack-loader',
        ],
      },
    ],
  },
  externals: {
	'lodash': 'require("lodash")',
    'react': 'require("react")',
	'prop-types': 'require("prop-types")',
    'react-native': 'require("react-native")',
    'react-native-svg': 'require("react-native-svg")',
    'react-native-vector-icons/MaterialIcons': 'require("react-native-vector-icons/MaterialIcons")',
    'react-native-vector-icons/FontAwesome': 'require("react-native-vector-icons/FontAwesome")',
    'react-native-vector-icons/Zocial': 'require("react-native-vector-icons/Zocial")',
    'react-native-vector-icons/Octicons': 'require("react-native-vector-icons/Octicons")',
    'react-native-vector-icons/MaterialCommunityIcons': 'require("react-native-vector-icons/MaterialCommunityIcons")',
    'react-native-vector-icons/Foundation': 'require("react-native-vector-icons/Foundation")',
    'react-native-vector-icons/SimpleLineIcons': 'require("react-native-vector-icons/SimpleLineIcons")',
    'react-native-vector-icons/EvilIcons': 'require("react-native-vector-icons/EvilIcons")',
    'react-native-vector-icons/Entypo': 'require("react-native-vector-icons/Entypo")',
    'react-native-vector-icons/Ionicons': 'require("react-native-vector-icons/Ionicons")',
    'react-native-vector-icons/Feather': 'require("react-native-vector-icons/Feather")'
  },
  plugins: [/*new webpack.optimize.UglifyJsPlugin()*/],
};
