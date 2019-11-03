import axios from 'axios'

const request = axios.create({
  baseURL: 'http://www.liulongbin.top:3005/',
  timeout: 5000
})
const requestSw = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
export const getswiperlist = function () {
  return requestSw({
    url: '/home/multidata'
  })
}
export function getnewslist () {
  return request({
    url: '/api/getnewslist'
  })
}
