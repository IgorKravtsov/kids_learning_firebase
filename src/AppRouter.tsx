import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { BookRoutes, RouteNames } from './routes'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Math = React.lazy(() => import('./pages/Math/Math'))
const Ukrainian = React.lazy(() => import('./pages/Ukrainian/Ukrainian'))
const Russian = React.lazy(() => import('./pages/Russian/Russian'))
const Art = React.lazy(() => import('./pages/Art/Art'))
const MathBooks = React.lazy(() => import('./pages/Math/books/Books'))
const MathSums = React.lazy(() => import('./pages/Math/sums/Sums'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Register = React.lazy(() => import('./pages/Register/Register'))

const AppRouter: React.FC = (): React.ReactElement => {
  const handleClose = () => {}

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />

        <Route path={RouteNames.MATH} element={<Math />}>
          <Route path={'books'} element={<MathBooks />} />
          <Route path={'sums'} element={<MathSums />} />
        </Route>

        <Route path={RouteNames.UKRAINIAN} element={<Ukrainian />}></Route>

        <Route path={RouteNames.RUSSIAN} element={<Russian />}></Route>

        <Route path={RouteNames.ART} element={<Art />}></Route>

        <Route path={RouteNames.LOGIN} element={<Login />}></Route>
        <Route path={RouteNames.REGISTER} element={<Register />}></Route>

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
