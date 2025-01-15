import { firebaseAuth } from '~/lib/firebase'

export const useGetCurrentUser = () => {
  return firebaseAuth.currentUser
}
