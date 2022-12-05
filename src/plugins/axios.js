import axios from "axios";

export default {
  install: (app, { baseURL, token }) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: baseURL,
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    })
    app.provide('axios', app.config.globalProperties.$axios)
  }
}