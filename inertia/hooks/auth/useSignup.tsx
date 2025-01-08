import { useMutation } from '@tanstack/react-query'
import { zeroAxios } from '~/lib/axios-instance'
import type { User } from 'firebase/auth'
import { ErrorResponse, SuccessResponse } from '#shared/types/index'

export const useSignup = () => {
  const mutate = useMutation<
    SuccessResponse<{
      user: User
    }>,
    ErrorResponse,
    Record<string, any>
  >({
    mutationKey: ['signup'],
    mutationFn: async (data) => (await zeroAxios.post('/auth/signup', data)).data,
  })

  return {
    isSigningUp: mutate.isPending,
    signUp: mutate.mutateAsync,
    mutate,
  }
}
