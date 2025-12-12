import React, { useState } from 'react'

export const useForm = (initialvalue) => {
    
    const [formData , setFormdata] = useState(initialvalue)

    const handleClick = (e)=>{
        setFormdata({...formData , [e.target.name]: e.target.value }) ;
    }

    const resetForm = ()=>{
        setFormdata(initialvalue)
    }
  return {handleClick , resetForm , formData } ;
}
