import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential, signOut, updateCurrentUser } from 'firebase/auth'
import { getUserById } from 'api/user/user'
import { usersCollectionName } from 'api/user/user.types'
import { auth, db } from 'config/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
import { transformUser } from 'utils/transformUser'

const usersRef = collection(db, usersCollectionName)

export const registerUser = async (email: string, password: string) => {
  const response: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
  await addDoc(usersRef, {
    isAdmin: false,
    email,
  })
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
