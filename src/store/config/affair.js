import affair from '../../util/affair'
// 定义状态(变量)
const state = {
  record: '湘ICP备17000235号-1',
  loading: false,
  blogList: [],
  blogDetail: {},
  site: {
    name: 'LiRETRO\'s Blog',
    date: new Date().getFullYear(),
    twitterName: 'BeePeeeee',
    zhihuName: 'LiRETRO',
    facebookName: 'retro.li.1',
    githubName: 'LiRETRO',
    
  }
}

// 获取状态(变量)
const getters = {
  record: state => state.record,
  loading: state => state.loading,
  blogList: state => state.blogList,
  blogDetail: state => state.blogDetail,
  site: state => state.site
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
  setLoading (state, payload) {
    state.loading = payload
  },
  setBlogList (state, payload) {
    state.blogList = payload.list
  },
  setBlogDetail (state, payload) {
    state.blogDetail = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
