import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

import { defaultRoutes, RouteNames, authRoutes, adminRoutes } from './routes'
import { useAuth } from 'shared-files/useAuth'
import { useAppSelector, useAppDispatch } from 'redux/hooks/typedHooks'
import { clear, selectSnackbar } from 'redux/slices/snackbarSlice'

import LoadingSkeleton from 'components/loadingSkeleton/LoadingSkeleton'

const AppRouter: React.FC = (): React.ReactElement => {
  const { isAuth, isAdmin } = useAuth()
  const { openSnack, snackType, message } = useAppSelector(selectSnackbar)

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(
      clear({
        message: '',
      })
    )
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Routes>
        {!isAuth ? [...defaultRoutes] : [...authRoutes]}
        {isAdmin && [...adminRoutes]}
        <Route path='*' element={<Navigate to={RouteNames.HOME} replace />} />
      </Routes>

      <Snackbar TransitionComponent={Slide} open={openSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Suspense>
  )
}

export default AppRouter
