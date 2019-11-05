import Vue from 'vue'
import Vuex from 'vuex'
import config from '../config/affair'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config
  },
  strict: true
})
