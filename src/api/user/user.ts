import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from 'config/firebase.config'
import { usersCollection } from './user.types'

export const getUserById = async (uid: string) => {
  const userDoc = doc(db, usersCollection, uid)
  const user = await getDoc(userDoc)
  return user.data()
}

export const makeAdmin = async (uid: string) => {
  const userDoc = doc(db, usersCollection, uid)
  // const userDoc = doc(db, usersCollection, uid)
  // console.log('userDoc', userDoc.)
  await updateDoc(userDoc, { isAdmin: true })
  // try {
  //   const docRef = await addDoc(collection(db, usersCollection), {
  //     isAdmin: true,
  //   })
  //   console.log('Document written with ID: ', docRef.id)
  // } catch (e) {
  //   console.error('Error adding document: ', e)
  // }
}
