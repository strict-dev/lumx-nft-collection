import { atom } from 'recoil'
import { data } from 'utils/mock'

export const fetchedData = atom({
  key: 'data',
  default: {} as typeof data
})
