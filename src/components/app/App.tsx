import React, { useEffect, useState } from 'react'
import './App.css'
import { onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { logOutUser, setUser } from 'redux/slices/userSlice'
import Header from 'components/header/Header'
import AppLayout from 'AppLayout'
import { transformUser } from 'utils/transformUser'
import { getUserByEmail } from 'api/user/user'
import { auth } from 'config/firebase.config'

const App: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  useEffect(() => {
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
      <AppLayout />
    </>
  )
}

export default App
