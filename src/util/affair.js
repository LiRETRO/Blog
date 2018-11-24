import axios from 'axios'
import config from './config'

export default {
  getBlogList: () => {
    return axios.get(`${config.serviceIp}api/blog/getBlogList`)
  }
}
