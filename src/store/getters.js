const getters = {
  list: state => state.app.list,
  item: (state) => (id) => {
    return state.app.list.find(todo => todo.id === id)
  }
}

export default getters
