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
