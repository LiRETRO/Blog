import affair from '../../util/affair'
// 定义状态(变量)
const state = {
  blogList: []
}

// 获取状态(变量)
const getters = {
  blogList: state => state.blogList
}
// 可以异步操作，使用commit调用mutations修改状态
const actions = {
  getBlogList ({ commit, state }, products) {
    affair.getBlogList().then(function (result) {
      commit('setBlogList', {list: result})
    })
  }
}
// 只能同步操作，修改状态
const mutations = {
  setBlogList (state, payload) {
    state.blogList = payload.list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
