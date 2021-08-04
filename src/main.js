import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import * as directives from './directive' // 全局指令
import * as filters from './filters' // 全局过滤器
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css' // css 重置
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/permission' // 全局路由控制
import '@/icons' // icon

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(ElementUI)

Vue.config.productionTip = false
// 全局指令注册
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
// 全局过滤器注册
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
