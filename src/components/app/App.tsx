import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAppDispatch } from 'redux/hooks/typedHooks'
import { logOutUser, setUser } from 'redux/slices/userSlice'
import './App.css'
import Header from '../header/Header'
import AppRouter from '../../AppLayout'
import { transformUser } from 'utils/transformUser'

const App: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(transformUser(user)))
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
