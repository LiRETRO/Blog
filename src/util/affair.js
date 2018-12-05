import axios from 'axios'

export default {
  getBlogDetail: id => {
    return axios.get(`api/blog/getBlogDetail?id=${id}`)
  },
  getBlogList: () => {
    return axios.get(`api/blog/getBlogList`)
  }
}
