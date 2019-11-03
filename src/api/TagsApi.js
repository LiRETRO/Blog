import request from 'axios'

export function getTags(query) {
  return request.request({
    url: 'api/tags/getTags',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: query
  });
}