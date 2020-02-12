import { baseApi } from './base'

export default {

  addTask: async function (newTask) {
    const response = await baseApi.post('api/tasks', newTask)
    return response
  },
  doneSingleTask: async function (id) {
    const response = await baseApi.put('api/tasks/' + id, { done: true })
    return response
  },
  updateSingleTask: async function (id, newTask) {
    const response = await baseApi.put('api/tasks/' + id, newTask)
    return response
  }
}
