import axios from 'axios'

const serviceIp = 'http://127.0.0.1/'

export default {
  getBlogList: () => {
    return axios.get(`${serviceIp}api/blog/getBlogList`)
  }
}
