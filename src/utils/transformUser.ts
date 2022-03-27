import { User } from 'firebase/auth'
import { AppUser } from 'api/auth/auth.types'

export const transformUser = (user: User): AppUser => {
  // return { ...user }
  const { uid, email, emailVerified, isAnonymous, phoneNumber, photoURL, displayName } = user
  return { uid, email, emailVerified, isAnonymous, phoneNumber, photoURL, displayName }
}