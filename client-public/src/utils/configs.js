import axios from 'axios'

export const apiHost = 'http://localhost:5000/api'
export const api = axios.create({ baseURL: apiHost })
