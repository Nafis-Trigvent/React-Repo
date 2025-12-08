import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    const handleClick =()=>[
        navigate('/')
    ]

    const handleClick2 = ()=>{
        navigate('/about')
    }

    const handleClick3 = ()=>{
        navigate('/contact')
    }
    

  return (
    <div>
        <span onClick={handleClick} style={{marginLeft : '40px'}}>Homepage</span>
        <span onClick={handleClick2} style={{marginLeft : '40px'}}>About Page </span>
        <span onClick={handleClick3} style={{marginLeft : '40px'}}> Contact Page </span>
    </div>
  )
}
