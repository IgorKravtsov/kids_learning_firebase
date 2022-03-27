import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut } from 'firebase/auth'

export const auth = getAuth()

export const registerUser = async (email: string, password: string) => {
  const response: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
  return response
}

export const loginUser = async (email: string, password: string) => {
  const response: UserCredential = await signInWithEmailAndPassword(auth, email, password)
  return response
}

export const logoutUser = async () => {
  return await signOut(auth)
}
