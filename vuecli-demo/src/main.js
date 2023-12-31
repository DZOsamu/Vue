import Vue from 'vue'   // 引入vue对象 类似于<script src="vue.js"></script>
import App from './App.vue'   // 将App.vue文件里对象引入过来 （vue项目页面入口）

Vue.config.productionTip = false   // 在控制台有一句提示消息

// let a = 10

new Vue({   // 实例化vue
  render: h => h(App),   // render函数：准备渲染App页面
}).$mount('#app')   // 渲染到index.html文件里 id叫app的标签上
