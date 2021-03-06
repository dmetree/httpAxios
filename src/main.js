import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejstest-72551.firebaseio.com'
axios.defaults.headers.common ['Authorization'] = 'dfdfdfd'
axios.defaults.headers.get ['Accepts'] = 'aplication/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request interceptor', config)
  return config
})

axios.interceptors.response.use(res => {
  console.log('Response interceptor' ,res)
  return res
})

axios.interceptors.request.eject(reqInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
