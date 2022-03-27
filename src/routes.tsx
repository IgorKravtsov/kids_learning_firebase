import React from 'react'
import { Route } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Math = React.lazy(() => import('./pages/Math/Math'))
const Ukrainian = React.lazy(() => import('./pages/Ukrainian/Ukrainian'))
const Russian = React.lazy(() => import('./pages/Russian/Russian'))
const Art = React.lazy(() => import('./pages/Art/Art'))
const MathBooks = React.lazy(() => import('./pages/Math/books/Books'))
const MathSums = React.lazy(() => import('./pages/Math/sums/Sums'))
const Login = React.lazy(() => import('./pages/Login/Login'))
const Register = React.lazy(() => import('./pages/Register/Register'))

export enum RouteNames {
  HOME = '/',
  MATH = '/math',
  UKRAINIAN = '/ukrainian',
  RUSSIAN = '/russian',
  ART = '/art',
  LOGIN = '/login',
  REGISTER = '/register',
}

export const BookRoutes = {
  MATH: RouteNames.MATH + '/books',
  UKRAINIAN: RouteNames.UKRAINIAN + '/books',
  RUSSIAN: RouteNames.RUSSIAN + '/books',
  ART: RouteNames.ART + '/books',
}

export const MathRoutes = {
  SUMS: RouteNames.MATH + '/sums',
}

export const defaultRoutes: React.ReactNode[] = [
  <Route key={RouteNames.HOME} path={RouteNames.HOME} element={<Home />} />,
  <Route key={RouteNames.LOGIN} path={RouteNames.LOGIN} element={<Login />}></Route>,
  <Route key={RouteNames.REGISTER} path={RouteNames.REGISTER} element={<Register />}></Route>,
]

export const authRoutes: React.ReactNode[] = [
  <Route key={RouteNames.HOME} path={RouteNames.HOME} element={<Home />} />,

  <Route key={RouteNames.MATH} path={RouteNames.MATH} element={<Math />}>
    <Route path={'books'} element={<MathBooks />} />
    <Route path={'sums'} element={<MathSums />} />
  </Route>,

  <Route key={RouteNames.UKRAINIAN} path={RouteNames.UKRAINIAN} element={<Ukrainian />}></Route>,

  <Route key={RouteNames.RUSSIAN} path={RouteNames.RUSSIAN} element={<Russian />}></Route>,

  <Route key={RouteNames.ART} path={RouteNames.ART} element={<Art />}></Route>,
]

// export interface IRoute {
//   path: string
//   element: React.ReactNode
//   children?: IRoute[]
// }

// export const defaultRoutes: IRoute[] = [
//   {
//     path: RouteNames.LOGIN,
//     element: <Login />,
//   },
//   {
//     path: RouteNames.LOGIN,
//     element: <Register />,
//   },
// ]

// export const authRoutes: IRoute[] = [
//   {
//     path: RouteNames.HOME,
//     element: <Home />,
//   },
//   {
//     path: RouteNames.MATH,
//     element: <Math />,
//     children: [
//       {
//         path: 'books',
//         element: <MathBooks />,
//       },
//       {
//         path: 'sums',
//         element: <MathSums />,
//       },
//     ],
//   },
//   {
//     path: RouteNames.UKRAINIAN,
//     element: <Ukrainian />,
//   },
//   {
//     path: RouteNames.RUSSIAN,
//     element: <Russian />,
//   },
//   {
//     path: RouteNames.ART,
//     element: <Art />,
//   },
// ]
