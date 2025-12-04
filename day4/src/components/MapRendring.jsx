import React from 'react'

export const MapRendring = () => {
    const array = ["apple" , "mango" ,"banana", "grapes", "orange" ] ;
  return (
    <div>
        {
            // map rendring method with key 
            array.map((item , index) =>(
                <span key={index}  style={{fontSize : '40px' , marginLeft : '20px' }}> {item} </span>
            ))
        }
        <br />        
    </div>
  )
}
