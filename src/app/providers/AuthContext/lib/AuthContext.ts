import { createContext } from 'react'
import {User} from "../../../types/user";

export interface AuthContextData {
  isSignedIn: boolean
  isLoading: boolean
  user: User | null
  setUser: (user: User) => void
}

export const AuthContext = createContext<AuthContextData>(
  {
    user: null,
    isSignedIn: false,
    isLoading: false,
    setUser: () => {}
  })
