import { baseApi } from './base'

export default {

  addTask: async function (newTask) {
    const response = await baseApi.post('api/tasks', newTask)
    return response
  },
  doneSingleTask: function (id) {
    const response = baseApi.put('api/tasks/' + id, { done: true })
    return response
  },
  updateSingleTask: function (id, newTask) {
    const response = baseApi.put('api/tasks/' + id, newTask)
    return response
  }
}
