import axios from 'axios'
import { data } from 'utils/mock'

export type DataResponse = typeof data

const api = axios.create({
  baseURL: '/api'
})

export const fetchData = async (): Promise<DataResponse> =>
  await api.get('/collections').then((res) => res.data)
