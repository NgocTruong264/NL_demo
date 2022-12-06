import axios from '@/plugins/axios'

const auth = {
  namespaced: true,
  state: () => ({
    isAuthenticated: false,
    userData: null,
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
    async login({ commit }, userInput) {
      try {
        const response = await axios.post('/auth/login', userInput)
        console.log(response)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refresh_token', response.data.refreshToken)
        const res = await axios.get('/user/profile')
        console.log(res)
        commit('SET_USER_DATA', res.data)
      } catch (error) {
        console.log(error)
      }
    },
    setToken({ commit }, token) {
      localStorage.setItem('token', token)
      commit('SET_TOKEN', token)
    },
    refreshToken({ commit }) {
      commit('REFRESH_TOKEN')
    },
    logout({ commit }) {
      localStorage.clear()
      commit('LOGOUT')
    }
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.userData = userData
      state.isAuthenticated = true
    },
    REFRESH_TOKEN(state) {
      state.isAuthenticated = true
      state.userData = {...state.userData }
    },
    LOGOUT(state) {
      state.isAuthenticated = false
      state.userData = null
    }
  }
}
export default auth
