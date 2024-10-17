import userService from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useGetUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => userService.fetchProfile(),
    retry: false,
    staleTime: Infinity,
    gcTime: Infinity
  })
}
