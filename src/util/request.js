import axios from 'axios'

axios.interceptors.request.use(function (request) {
  // Successed
  console.log(request)
  return request
}, function (error) {
  // Failed
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // Successed
  console.log(response)
  return response.data.resultObj
}, function (error) {
  // Failed
  console.log(error)
  return Promise.reject(error)
})
