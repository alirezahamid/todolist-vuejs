import Axios from 'axios'

export const baseApi = Axios.create({
  baseURL: 'http://127.0.0.1:3000/'
})
