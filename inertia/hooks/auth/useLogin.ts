import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword, User } from 'firebase/auth'
import { useState } from 'react'
import { firebaseAuth } from '~/lib/firebase'

type LoginResponse = {
  data: User | null
  error: FirebaseError | null
}

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const login = async (email: string, password: string): Promise<LoginResponse> => {
    setLoading(true)

    try {
      const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
      const user = userCredential.user

      return {
        data: user,
        error: null,
      }
    } catch (error) {
      return {
        data: null,
        error: error as FirebaseError,
      }
    } finally {
      setLoading(false)
    }
  }

  return { login, isLogging: loading }
}
