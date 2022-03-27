import { useAppSelector } from 'redux/hooks/typedHooks'
import { selectUser } from 'redux/slices/userSlice'

export const useAuth = () => {
  const { user, error } = useAppSelector(selectUser)

  return {
    user,
    error,
    isAuth: user !== null,
    isAdmin: user?.isAdmin,
  }
}
