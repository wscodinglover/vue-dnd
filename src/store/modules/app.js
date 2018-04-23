import AppService from '../../services/modules/list'
const app = {
  state: {
    list: [],
    id: 1
  },
  mutations: {
    SET_LIST (state, list) {
      state.list = list
    },
    SAVE_ITEM (state, {id, des}) {
      const data = state.list.find((obj) => obj.id === id)
      data.des = des
    },
    ITEM_ID (state, id) {
      state.id = id
    }
  },
  actions: {
    getListData ({ commit }) {
      AppService.getList().then(res => {
        commit('SET_LIST', res)
      })
    }
  }
}

export default app
