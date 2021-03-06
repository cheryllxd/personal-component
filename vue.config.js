/*
 * @Author: @Guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 23:29:39
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/vue.config.js
 */
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')
const fs = require('fs')
function resolve(filePath) {
  return path.join(__dirname, filePath)
}
const getEntries = dir => {
  // 整理需要按需加载的文件，dir为各组件所在的共同目录
  let absolutionPath = path.resolve(dir) // 绝对路径
  let sonFiles = fs.readdirSync(absolutionPath) // 读取第一层级的子元素文件,就是每个组件的包文件名
  let entries = {}
  sonFiles.forEach(file => {
    let fileDirPath = path.join(absolutionPath, file) // 路径拼接，得到组件所在地址
    if (fs.statSync(fileDirPath).isDirectory()) { // 判断路径的状态是不是文件夹
      let filePath = path.join(fileDirPath, 'index.js') // 得到组件所在路径，继续拼接得到文件地址的pwd——绝对地址
      entries[file] = filePath
    }
  })
  return entries
}
const commonConfig = {}
let buildConfig = {
  outputDir: 'lib'
}
// 按需加载（build命令&&后第二个脚本，为按需加载打包）
const args = process.argv.slice(2); // 取出脚本执行时用户传入的所有参数
if (isProd && args.includes('--pkg')) { // '--pkg'作为自定义属性，为的是标识当前脚本是执行按需加载配置的
  // 生产环境 && 按需加载配置的时候
  buildConfig = {
    outputDir: 'lib', // 导出目录
    configureWebpack: { // 配置webpack
      entry: { // 打包入口，为多个。
        ...getEntries('./packages') // 传入打包文件所在目录，通过函数获取一个对象，表明所有入口的配置
      },
      output: { // 组件使用者借助babel-plugin-import来实现按需导入
        filename: '[name]/index.js', // 导出到对应名字的文件夹下的index.js
        libraryTarget: 'umd', // 打包规范umd (将 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量)
        libraryExport: 'default', // 导出格式-默认导出
        //library: ['xingorg1', '[name]'] // 打包的库名，会挂载在window上：window.xingorg1，其作为一个对象，内部还有多组件的[name]属性，如window.xingorg1.button
      },
      externals: { // 打包时的排除项,以减少包的体积 https://www.webpackjs.com/configuration/externals/
        vue: {
          root: 'Vue', // 指向全局变量
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    },
    css: { // 抽离css
      sourceMap: false, // 源码映射
      extract: {
        filename: '[name]/style.css' // 抽离css到./dist/css/[name]/style.css
      }
    },
    chainWebpack: config => {
      // 去掉一些默认的不必要的配置
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('html')
      config.plugins.delete('hmr') // 热更新
      config.entryPoints.delete('app')
    }
  }
}

module.exports = !isProd ? commonConfig : Object.assign(commonConfig, buildConfig)