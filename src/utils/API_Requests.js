import axios from 'axios'

const myApi = axios.create({
  baseURL: 'https://dhfakestore2.herokuapp.com/api/',
})

export default myApi
