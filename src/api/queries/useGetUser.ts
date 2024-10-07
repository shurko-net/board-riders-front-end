import { useQuery } from '@tanstack/react-query'
import { request } from '../axios'

export function getUser() {
  return request({ url: '/user/get-user' })
}

export function useGetUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: Infinity,
    gcTime: Infinity
  })
}
