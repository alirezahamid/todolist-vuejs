import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const baseApi = 'http://127.0.0.1:3000'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    doneTasks: []

  },
  mutations: {
    fillTasks (state, tasks) {
      state.tasks = tasks
    },
    fillDoneTasks (state, doneTasks) {
      state.doneTasks = doneTasks
    }
  },
  actions: {
    fetchTasks ({ commit }) {
      Axios.get(baseApi + '/api/tasks')
        .then(res => {
          commit('fillTasks', res.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    fetchDoneTasks ({ commit }) {
      Axios.get(baseApi + '/api/compeleted')
        .then(res => {
          commit('fillDoneTasks', res.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  },
  modules: {
  }
})
