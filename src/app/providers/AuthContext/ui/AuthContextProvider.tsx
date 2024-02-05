import {ReactNode, useEffect, useState} from 'react'
import {AuthContext} from '../lib/AuthContext'
import {User} from "../../../types/user";
import authAPI from "../../../../api/AuthApi";

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    authAPI.getSession()
      .then(response => {
        setIsSignedIn(true)
        setUser(response.data)
      })
      .catch((error) => {
        setIsSignedIn(false)
        setUser(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <AuthContext.Provider value={{
      user, isLoading, isSignedIn, setUser: () => {
      }
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
