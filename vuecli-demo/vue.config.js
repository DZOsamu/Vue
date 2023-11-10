// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// vue.config.js vue脚手架项目默认的配置文件名
// webpack + node 环境 导出配置对象
module.exports = {
  devServer: {
    port: 3000,
    open: true   // 浏览器自动打开
  }
}