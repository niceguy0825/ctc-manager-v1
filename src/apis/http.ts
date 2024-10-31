import axios, { AxiosInstance } from 'axios'

export const ApiURL = 'https://new-api.kfund24.com/v1'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: ApiURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance

export default http
