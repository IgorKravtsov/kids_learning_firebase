import { User } from 'firebase/auth'

export interface LoginRegisterRequest {
  email: string
  password: string
}

export interface LoginRegisterResponse {
  user: User
}
