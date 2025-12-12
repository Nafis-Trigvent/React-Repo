import React, { useContext, useEffect } from 'react'
import { Data, Data2 } from '../App'
import { GlobalProvider } from '../contexts/GlobalContext'
import { AuthContext, AuthProvider } from '../contexts/AuthContext'

export const ChiidC = () => {
    const Firstname = useContext(Data)
    const yourAge = useContext(Data2)
    const { user, setUser, theme, setTheme } = useContext(GlobalProvider);

    useEffect(() => {
        const backgroundTheme = () => {
            if (theme === "light") {
                document.body.style.backgroundColor = "white"
                document.body.style.color = "black"
            }
            if (theme === "dark") {
                document.body.style.backgroundColor = "black"
                document.body.style.color = "white"
            }
        }

        backgroundTheme();
    }, [theme])

    // authContext 

    const { login , logout } = useContext(AuthProvider)

    const fakeUser = { name: "Nafis", email: "nafis@gmail.com" };
    const fakeToken = "abc123token";

    return (
        <>
            <div>Your name is {Firstname}  and your age is {yourAge} </div>
            <h2> user : {user}</h2>
            <h2> theme : {theme}</h2>
            <button onClick={() => { setUser(" global user") }}> setuser </button>
            <button onClick={() => { setTheme("dark") }}> Dark theme  </button>
            <button onClick={() => { setTheme("light") }}> Light theme  </button>
            <button onClick={() => { login({userData : fakeUser , userToken:  fakeToken}) }}> LOGIN  </button>
            <button onClick={() => { logout() }}> LOGOUT  </button>


        </>
    )
}
