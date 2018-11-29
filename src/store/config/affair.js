import affair from '../../util/affair'
// 定义状态(变量)
const state = {
  blogList: [],
  blogDetail: {}
}

// 获取状态(变量)
const getters = {
  blogList: state => state.blogList,
  blogDetail: state => state.blogDetail
}
// 可以异步操作，使用commit调用mutations修改状态
const actions = {
  getBlogList ({ commit, state }, products) {
    affair.getBlogList().then(function (result) {
      commit('setBlogList', {list: result})
    })
  },
  getBlogDetail ({ commit, state }, products) {
    affair.getBlogDetail(products).then(function (result) {
      commit('setBlogDetail', result)
    })
  }
}
// 只能同步操作，修改状态
const mutations = {
  setBlogList (state, payload) {
    state.blogList = payload.list
  },
  setBlogDetail (state, payload) {
    console.log(payload)
    state.blogDetail = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
