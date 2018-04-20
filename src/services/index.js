import axios from 'axios'
const options = {
  baseURL: process.env.BASE_API,
  timeout: 10000
}
const service = axios.create(options)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (Number(response.status) === 200) {
      return response.data
    }
  }, error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
