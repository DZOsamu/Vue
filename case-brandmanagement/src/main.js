import Vue from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"

Vue.config.productionTip = false

// 方式1：全局过滤器（在任意的.vue文件内可以直接使用）
// 语法：Vue.filter("过滤器名",值 => 处理后结果)
Vue.filter("reverse", val => val.split("").reverse().join(""))

new Vue({
  render: h => h(App),
}).$mount('#app')
