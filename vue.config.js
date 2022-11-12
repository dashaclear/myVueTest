const { defineConfig } = require('@vue/cli-service')
// 这种使用defineConfig的应该是比较老的吧，直接暴露一个对象也是可以的
module.exports = defineConfig({
  pages: {
    index: {
      entry: './src动画和过渡/main.js'//可以通过指定入口来指定打开哪个src文件夹
    }
  }
})
