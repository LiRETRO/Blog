// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/manager/manager'
import './util/request'
// 引入jquery 及其插件
import 'jquery.easing'
// pace
import '../static/js/pace.min.js'
// 引入Bootstrap
import '../static/css/bootstrap.min.css'
import '../static/js/bootstrap.min.js'
// 引用base css
import '../static/css/blog.less'
import '../static/css/syntax.css'
// 引用base js
import '../static/js/hux-blog.js'
import '../static/js/jquery.tagcloud.js'
// 插件
import './util/date.js'
// 公共组件
import TimeLine from './components/TimeLine'

Vue.use(Vuex)
// 注册全局公用组件
Vue.component('TimeLine', TimeLine)

String.prototype.format = function () {
  if (arguments.length == 0) return this;
  for (var s = this, i = 0; i < arguments.length; i++)
    s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
  return s;
}

Vue.config.productionTip = false
/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
