
import { createContext } from 'react';
import './App.css'
import { ChiidA } from './components/ChiidA'
import { GlobalContext } from './contexts/GlobalContext';
import { AuthContext, AuthProvider } from './contexts/AuthContext';

export const Data = createContext()
export const Data2 = createContext()

function App() {

  const name = "nafis";
  const age = "21";

  return (
    <>
      <AuthContext>
        <GlobalContext>
          <Data.Provider value={name}>
            <Data2.Provider value={age} >
              <p>hello world </p>
              <ChiidA />
            </Data2.Provider>
          </Data.Provider>
        </GlobalContext>
      </AuthContext>
    </>
  )
}

export default App
