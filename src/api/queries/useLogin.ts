import { useMutation, useQueryClient } from '@tanstack/react-query'
import { request } from '../axios'

export function useLogin() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: data => {
      return request({ method: 'post', url: '/auth/login', data: data })
    },
    onSuccess: user => {
      queryClient.setQueryData(['user', user])
    }
  })
}
