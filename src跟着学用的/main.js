import Vue from 'vue'

import App from './App.vue'

// import plugins from './plugins'
// Vue.use(plugins)//使用了引入的插件
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
