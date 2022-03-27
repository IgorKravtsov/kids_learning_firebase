import { addDoc, collection, doc, DocumentData, getDoc, getDocs, limit, query, updateDoc, where } from 'firebase/firestore'
import { auth, db } from 'config/firebase.config'
import { usersCollectionName } from './user.types'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { AppUser } from 'api/auth/auth.types'

const usersRef = collection(db, usersCollectionName)

export const getUserById = async (uid: string) => {
  const userDoc = doc(db, usersCollectionName, uid)
  const user = await getDoc(userDoc)
  return user.data()
}

export const getUserByEmail = async (email: string) => {
  if (!email) return
  const q = query(usersRef, where('email', '==', email), limit(1))

  const querySnapshot = await getDocs(q)
  const res: DocumentData[] = []
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    res.push(doc.data())
  })

  return res[0]
}

export const makeAdmin = async (uid: string, email: string) => {
  // const q = query(usersRef, where("email", "==", email), limit(1));
  // // const userDoc = doc(db, usersCollectionName, uid)
  // const querySnapshot = await getDocs(q);
  // const a = querySnapshot.
  // querySnapshot.forEach(async (doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  //   await updateDoc(doc.get(), { isAdmin: true })
  // });
  // const userDoc = doc(db, usersCollection, uid)
  // console.log('userDoc', userDoc.)
  // try {
  //   const docRef = await addDoc(collection(db, usersCollection), {
  //     isAdmin: true,
  //   })
  //   console.log('Document written with ID: ', docRef.id)
  // } catch (e) {
  //   console.error('Error adding document: ', e)
  // }
}

export const registerAdmin = async (email: string, password: string, user: AppUser) => {
  // await createUserWithEmailAndPassword(auth, email, password)
  // return await addDoc(usersRef, {
  //   isAdmin: true,
  // })
}
