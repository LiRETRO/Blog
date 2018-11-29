import request from 'axios'

export function publishBlog (blogObj) {
    return request.request({
        url: '/api/blog/addBlog',
        method: 'POST',
        data: blogObj
    })
}