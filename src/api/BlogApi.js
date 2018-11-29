import request from 'axios'

export function publishBlog (blogObj) {
    return request.request({
        url: 'http://127.0.0.1:8000/api/blog/addBlog',
        method: 'POST',
        data: blogObj
    })
}