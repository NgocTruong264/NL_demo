const user = {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
    userData: {},
    token: ''
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
    },
    setToken({ commit }, token) {
      localStorage.setItem('token', token)
      commit('SET_TOKEN', token)
    }
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData
    },
    SET_AUTH(state, flag) {
      state.isAuthenticated = flag
    },
    SET_TOKEN(state, token) {
      state.token = token
    }
  }
}
export default user
