import Vue from 'vue'
import Vuex from 'vuex'
import { baseApi } from '@/services/api/base'

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
      baseApi.get('api/tasks')
        .then(res => {
          commit('fillTasks', res.data)
        }).catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    fetchDoneTasks ({ commit }) {
      baseApi.get('api/compeleted')
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
