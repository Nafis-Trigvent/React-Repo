import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const ApiIntegration = () => {

    const [data , setData ] = useState([]) ;
    const [ loading ,setLoading ] = useState(true) ;

    useEffect(()=>{

        // fetching data with the help of fetch 
        (async ()=>{const result = await fetch('https://fakestoreapi.com/products') ;
        const response = await result.json()

        // error handling 
        if(!result.ok){
            throw new Error("network error")
        }
        console.log(response)
        setLoading(false) ;
        setData(response) ;
    }) ()
        
    }, [])  


  return (
    <div className='p-5 flex gap-4'> 
        {/* waiting " until data comes " */}
        {loading ? ( <p> Loading ... </p>) : (

            // if data will come then 
            data.map((item) => (
                <div className='flex flex-col gap-2 p-3 border-1 h-[400px] w-[300px] justify-between  ' key={item.id}>
                    <p>{item.title } </p>
                    <p className='truncate'> {item.description }</p>
                    <img src={item.image} alt="" className='h-[250px] w-[280px]' />
                    <p> {item.price} </p>
                </div>
            )) )
        }
    </div>
  )
}
