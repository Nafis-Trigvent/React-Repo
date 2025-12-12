import React, { createContext, useState } from 'react'

export const AuthProvider = createContext()

export const AuthContext = ({children}) => {

    const [user , setUser ] = useState(null)
    const [token , setToken ] = useState(null)
    const [isAuthenticated , setIsAuthenticatedsAuht ] = useState(false) 

    // response come from login API 

    const login  = ({userData , userToken })=>{
        setUser(userData );
        setToken( userToken ) ;
        setIsAuthenticatedsAuht(true ); 

        localStorage.setItem("token",userToken)
        localStorage.setItem("user" , JSON.stringify(userData))
    }

    const logout = ()=>{
        setToken(null)
        setUser(null)
        setIsAuthenticatedsAuht(false) 

        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
  return (
    <AuthProvider.Provider value={{user , token , isAuthenticated , login , logout}}>
        {children}
    </AuthProvider.Provider>
  )
}
