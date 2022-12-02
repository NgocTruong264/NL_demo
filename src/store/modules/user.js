const user = {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
    userData: {}
  }),
  getters: {
    getUserData(state) {
      return state.userData
    },
    getIsAuthenticated(state) {
      return state.isAuthenticated
    }
  },
  actions: {
    setUser({ commit }, userData) {
      commit('SET_USER_DATA', userData)
      if (userData) {
        commit('SET_AUTH', true)
      } else {
        commit('SET_AUTH', false)
      }
    }
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData
    },
    SET_AUTH(state, flag) {
      state.isAuthenticated = flag
    }
  }
}
export default user
