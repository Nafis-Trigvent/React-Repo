import React, { useCallback, useEffect, useState } from 'react'

export const useAuth = () => {

    const [user ,setUser] = useState(null)
    const [token , setToken ] = useState(localStorage.getItem("token") || null ) ;

    const [loading , setLoading ] = useState(false) ;
    const [error , setError ] = useState(null) ;

    const login  = useCallback( async( email , password)=>{
        setLoading(true)
        setError(null)

        try {
      //  fake user
      const fakeUser = {
        id: 1,
        name: "Demo User",
        email: email,
      };

    const fakeToken = "FAKE_JWT_TOKEN_123456";

      setUser(fakeUser);
      setToken(fakeToken) ;

      localStorage.setItem("token", fakeToken)
      localStorage.setItem("user" , JSON.stringify(fakeUser))

      return true // login success 

    } catch(err){
        setError(" something went wrong ")
        return false 
    }
    },[])

    // logout 

    const logout = useCallback(() => {
    setUser(null);
    setToken(null);

    // remove from storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

  }, []);

   useEffect(()=>{
    if(!token) return

    const savedUser = localStorage.getItem("user")

    if(savedUser){
        setUser(JSON.parse(localStorage.getItem("user")))
    }
    },[token])
  return { user ,token , loading , error , logout , login , setLoading,isAuthenticated : !!token }
}
