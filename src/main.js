/**
 * 统一的入口文件配置
 * 引入项目所需的所有依赖和插件以及其他配置文件
 */
import "babel-polyfill"//ie下没有promise的兼容包

import Vue from 'vue'
import App from './App'

import router from './router' //引入路由配置

import util from './util'//引入全局定义的方法/属性，实例化方法、指令和过滤器
Vue.use(util);

import axios from './http'//引入统一配置拦截器的axios请求
Vue.prototype.$http = axios;

import VueCookies from 'vue-cookies'//操作cookie的封装
Vue.use(VueCookies);

import lodash from 'lodash'//引入lodash
Vue.prototype._ = lodash; //组件中使用lodash时使用 this._ 调取

import iView from 'iview'//引入ui库
import 'iview/dist/styles/iview.css'
Vue.use(iView)

require('./mock/mock.js') //引入mock

import store from './store/index'//引入vuex仓库


//import ElementUI from 'element-ui'//elementUi作为备选
// import 'element-ui/lib/theme-chalk/index.css'
//Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
