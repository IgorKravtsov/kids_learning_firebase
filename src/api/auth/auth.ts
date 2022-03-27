import { getUserById } from 'api/user/user'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut, updateCurrentUser } from 'firebase/auth'
import { transformUser } from 'utils/transformUser'

export const auth = getAuth()

export const registerUser = async (email: string, password: string) => {
  const response: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
  return transformUser(response.user)
}

export const loginUser = async (email: string, password: string) => {
  const response: UserCredential = await signInWithEmailAndPassword(auth, email, password)
  const user = await getUserById(response.user.uid)
  return transformUser(response.user, user)
}

export const logoutUser = async () => {
  return await signOut(auth)
}

// export const updateUser = async (user: AppUser) => {

//   updateCurrentUser(auth, {...user})
// }
