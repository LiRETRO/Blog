import request from 'axios'

export function publishBlog (blogObj) {
  return request.request({
    url: 'api/blog/addBlog',
    method: 'PUT',
    data: blogObj
  })
}

export function getBlogList (query) {
  return request.request({
    url: 'api/blog/getBlogList',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: query
  })
}

export function getBlogDetail (id) {
  return request.get(`api/blog/getBlogDetail/${id}`)
}

export function getBlogPrevAndNext (id) {
  return request.get(`api/blog/getBlogPrevAndNext/${id}`);
}
