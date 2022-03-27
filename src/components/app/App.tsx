import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { logOutUser, setUser } from 'redux/slices/userSlice'
import './App.css'
import Header from '../header/Header'
import AppRouter from '../../AppLayout'
import { transformUser } from 'utils/transformUser'
import { getUserByEmail } from 'api/user/user'

const App: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, async user => {
      if (user) {
        const responseUser = await getUserByEmail(user?.email || '')
        dispatch(setUser(transformUser(user, responseUser)))
      } else {
        dispatch(logOutUser())
      }
    })
  }, [])

  return (
    <>
      <Header />
      <AppRouter />
    </>
  )
}

export default App
