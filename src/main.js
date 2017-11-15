import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueResource  from 'vue-resource'
import  vuex  from 'vuex'
import 'element-ui/lib/theme-default/index.css'
import './assets/scwx-css/reset.css'
import './assets/scwx-less/px2rem.less'
import http from './assets/scwx-js/http.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store.js'
// 编辑器
import mavonEditor from 'mavon-editor'
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
Vue.prototype.http = http;
// vue-swiper
Vue.use(VueAwesomeSwiper)
// var Vue = require('vue')
// var VueAwesomeSwiper = require('vue-awesome-swiper')
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.prototype.$ajax = axios
Vue.use(vuex)
Vue.use(VueResource)
Vue.config.productionTip = false
//开启debug模式
Vue.config.debug = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
