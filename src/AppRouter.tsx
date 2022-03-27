import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { defaultRoutes, RouteNames, authRoutes } from './routes'
import { useAuth } from './shared-files/useAuth'

const AppRouter: React.FC = (): React.ReactElement => {
  const { isAuth } = useAuth()
  // const isAuth = false
  const handleClose = () => {}

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {!isAuth ? [...defaultRoutes] : [...authRoutes]}
        <Route path='*' element={<Navigate to={RouteNames.HOME} replace />} />
      </Routes>

      <Snackbar open={false} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Suspense>
  )
}

export default AppRouter
