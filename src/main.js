// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
// import ElementUI from 'element-ui'
import Element from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.use(ElementUI)
Vue.use(Element, { size: 'small' })
Vue.prototype.$axios = axios
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    add (state, n) {
      state.count += n
    }
  },
  getters: {
    done (state) {
      return state.count + 5
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
