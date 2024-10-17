import authService from '@/services/auth/auth.sevice'
import { IFormDataLoginRegister } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTransition } from 'react'

export function useRegister() {
  const queryClient = useQueryClient()
  const [isPending, startTransition] = useTransition()
  return useMutation({
    mutationFn: (data: IFormDataLoginRegister) => {
      return authService.main('registration', data)
    },
    onSuccess: user => {
      startTransition(() => {
        queryClient.setQueryData(['user'], user)
        window.location.href = '/'
      })
    }
  })
}
