const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/gi, '');
console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV);

const webpackConfig = require(`./config/webpack.${env}.js`);
console.log('webpackConfig :>> ', webpackConfig);

module.exports = webpackConfig;
