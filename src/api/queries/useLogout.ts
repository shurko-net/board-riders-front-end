import authService from '@/services/auth/auth.sevice'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export function useLogout() {
  const queryClient = useQueryClient()
  const [isPending, startTransition] = useTransition()
  const { push } = useRouter()

  const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation<
    AxiosResponse,
    AxiosError
  >({
    mutationFn: () => {
      return authService.logout()
    },
    onError: error => {
      if (error.status === 401) {
        startTransition(() => {
          queryClient.setQueryData(['user'], false)
          push('/')
        })
      }
    }
  })

  const isLogoutLoading = isLogoutPending || isPending

  return { mutateLogout, isLogoutLoading }
}
