import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://192.168.2.23:1001',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const setup = (store) => {
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }),

  axiosInstance.interceptors.response.use((res) => res, 
  async (error) => {
    const originalConfig = error.config
    if (originalConfig.url !== '/auth/login' && error.response) {
      // Access token het han (expired)
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true

        try {
          const res = await axiosInstance.post('/auth/refresh-token', { refresh_token: localStorage.getItem('refresh_token') })
          const { token } = res.data.token
          store.dispatch('auth/refreshToken');
          //update new token
          localStorage.setItem('token', token)
          return axiosInstance(originalConfig)
        } catch (e) {
          return Promise.reject(e)
        }
      }
    }
    return Promise.reject(error)
  })
}

export default axiosInstance