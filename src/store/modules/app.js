import AppService from '../../services/modules/list'
const app = {
  state: {
    list: []
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    getListData ({ commit }) {
      AppService.getList().then(res => {
        console.log('APP_LIST:', res.data.list)
        commit('SET_LIST', res.data.list)
      })
    }
  }
}

export default app
