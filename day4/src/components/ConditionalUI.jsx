import React from 'react'
import { useState } from 'react'

export const ConditionalUI = () => {
    const [data , setData] = useState(false)
    
    function handleClick(){
        setData(!data)
    }
  return (
    <div>
        {/* ternary operator  */}
        {
            data ? (
                <div  style={{fontSize : '40px' , marginLeft : '20px' }}> Data is True </div>
            ) : (
                <div  style={{fontSize : '40px' , marginLeft : '20px' }}> Data is False  </div>
            )
        }

        {/* rendring using logical And "&&" */}
        {
            data && <div style={{fontSize : '40px' , marginLeft : '20px' ,marginTop : '40px' }}> It is rendring using logical and "&&" ,  while "data" id true </div>
        }
        <p style={{fontSize : '40px' , marginLeft : '20px' }}> Data Status : { data ? ( <span >True</span>) :  ( <span>False</span>)} </p>
        <button  onClick={handleClick}  style={{fontSize : '40px' , marginLeft : '20px' }}> 
            
            Click for make data { data ? ( <span >False</span>) :  ( <span>True</span>)} </button>
    </div>
  )
}
