import axios from '../index'
// https://easy-mock.com/mock/5ad6c4d8baad39136d1d2904/example/list
// const Url = 'https://easy-mock.com/mock/5ad6c4d8baad39136d1d2904/example/list'
class AppService {
  constructor (http) {
    this.http = http
  }
  getList () {
    return this.http.get('/api/users')
  }
}

export default new AppService(axios)
