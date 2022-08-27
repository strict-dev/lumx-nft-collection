import { useQuery } from '@tanstack/react-query'
import { fetchData } from 'services/fetchData'

export const useData = () => {
  const getData = async () => await fetchData()

  const { ...useQueryResult } = useQuery(['data'], getData)

  return useQueryResult
}
