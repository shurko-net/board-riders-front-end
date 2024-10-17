import authService from '@/services/auth/auth.sevice'
import { IFormDataLogin } from '@/types/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export function useLogin() {
  const { push } = useRouter()
  const queryClient = useQueryClient()

  const [isPending, startTransition] = useTransition()
  const {
    mutate: mutateLogin,
    isPending: isLoginPending,
    isError,
    error
  } = useMutation({
    mutationFn: (data: IFormDataLogin) => {
      return authService.main('login', data)
    },
    onSuccess: user => {
      startTransition(() => {
        queryClient.setQueryData(['user'], user)
        push('/')
      })
    }
  })

  const isLoginLoading = isLoginPending || isPending

  return { mutateLogin, isLoginLoading, isError, error }
}
