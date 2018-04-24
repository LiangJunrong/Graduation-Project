'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    //JSLiang：代理、跨域
    proxyTable: {
      //JSLiang：/goods的都转为3000端口
      '/goods': {
        target:'http://localhost:3000'
      },
      //JSLiang：以/goodss/*下，不管后面有多少级路由，都转到3000端口
      '/goods/**': {
        target: 'http://localhost:3000'
      },
      //JSLiang：/users的都转为3000端口
      '/users': {
        target:'http://localhost:3000'
      },
      //JSLiang：以/users/*下，不管后面有多少级路由，都转到3000端口
      '/users/**': {
        target: 'http://localhost:3000'
      },
      //JSLiang：/hostels的都转为3000端口
      '/hostels': {
        target: 'http://localhost:3000'
      },
      //JSLiang：/clubs的都转为3000端口
      '/clubs': {
        target: 'http://localhost:3000'
      },
      //JSLiang：以/clubs/*下，不管后面有多少级路由，都转到3000端口
      '/clubs/**': {
        target: 'http://localhost:3000'
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    //JSLiang：自动启动浏览器
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
