// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/manager/manager'
// 引入jquery 及其插件
import 'jquery.easing'
// 瀑布流
import 'isotope-layout'
// 时间线
import '../static/js/jquery.roadmap'
import '../static/css/jquery.roadmap.min.css'
// 引入Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// 引入resume
import '../static/css/resume.css'
// iconfont
import '../static/css/iconfont.css'
// 公共组件
import TimeLine from './components/TimeLine'

Vue.use(Vuex)

// 注册全局公用组件
Vue.component('TimeLine', TimeLine)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})