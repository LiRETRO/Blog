import affair from '../../util/affair'
// 定义状态(变量)
const state = {
  // 备案号
  record: '湘ICP备17000235号-1',
  // 是否显示加载中...
  loading: false,
  blogList: [],
  blogDetail: {},
  // 网站内信息
  site: {
    name: 'LiRETRO\'s Blog',
    date: new Date().getFullYear(),
    twitterName: 'BeePeeeee',
    zhihuName: 'LiRETRO',
    facebookName: 'retro.li.1',
    githubName: 'LiRETRO'
  },
  // Header使用
  header: {
    title: 'LiRETRO\'s Blog',
    subheading: 'Do What I Wanna Do',
    background: '/static/images/header_bg.png'
  },
  tempPublishData: {},
  guidGenerator: function () {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
 
    let uuid = s.join("");
    return uuid;
  }
}

// 获取状态(变量)
const getters = {
  record: state => state.record,
  loading: state => state.loading,
  blogList: state => state.blogList,
  blogDetail: state => state.blogDetail,
  site: state => state.site,
  header: state => state.header,
  tempPublishData: state => state.tempPublishData,
  guidGenerator: state => state.guidGenerator
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
  },
  setHeader (state, payload) {
    state.header = payload;
  },
  setTempPublishData (state, payload) {
    state.tempPublishData = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
