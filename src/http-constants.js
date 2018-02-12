import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://127.0.0.1:8080/'
} else {
  baseURL = 'http://api.example.com:8080'
}

export const HTTP = axios.create(
  {
    baseURL: baseURL
  })
