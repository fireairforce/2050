const QiniuPlugin = require('qiniu-webpack-plugin')
const config = require('./pushConfig.js')

module.exports = function (webpackConfig, env) {
  if(process.env.NODE_ENV==='production'){
    webpackConfig.plugins.push(
      new QiniuPlugin({
        ACCESS_KEY: config.qiniu.ACCESS_KEY,
        SECRET_KEY: config.qiniu.SECRET_KEY,
        bucket: 'ccpc',
        path: '2050/'
      })
    )
  }
  return webpackConfig
}