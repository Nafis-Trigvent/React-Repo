import React, { createContext, useState } from 'react'

export const GlobalProvider = createContext()

export const GlobalContext = ({children}) => {
    const [user , setUser ] = useState()
    const [ theme , setTheme ] = useState()

  return (
    <GlobalProvider.Provider value={{user , setUser , theme ,setTheme }}>
        {children}
    </GlobalProvider.Provider>
  )
}
