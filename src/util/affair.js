import axios from 'axios'

export default {
  getLocalIp: () => {
    return axios.get('http://pv.sohu.com/cityjson?ie=utf-8')
  },
  getBlogDetail: id => {
    return axios.get(`api/blog/getBlogDetail?id=${id}`)
  },
  getBlogList: () => {
    return axios.get(`api/blog/getBlogList`)
  }
}
