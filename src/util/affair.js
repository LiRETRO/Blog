import axios from 'axios'
import config from './config'

export default {
  getBlogDetail: id => {
    return axios.get(`${config.serviceIp}api/blog/getBlogDetail?id=${id}`)
  },
  getBlogList: () => {
    return axios.get(`${config.serviceIp}api/blog/getBlogList`)
  }
}
