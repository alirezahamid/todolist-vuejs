import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const baseApi = 'http://127.0.0.1:3000'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    pushTasks (state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    fetchTasks ({ commit }) {
      Axios.get(baseApi + '/api/tasks')
        .then(res => {
          commit('pushTasks', res.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  },
  modules: {
  }
})
