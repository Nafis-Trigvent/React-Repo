import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    localStorage.setItem("token" , "123") 
    navigate("/")
  }
  return (
    <> 
      <button onClick={handleClick}> login </button>

    </>
  )
}
