import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Home = () => {

    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/login')
    }
    const handleClick2= () =>{
        localStorage.removeItem("token") 
    }
  return (
    <>
    <Navbar/> <hr />
    <div>Home page </div>
    <br />
    <button onClick={handleClick}>  login </button>
    <button  onClick={handleClick2}> logout</button>
    </>

  )
}
