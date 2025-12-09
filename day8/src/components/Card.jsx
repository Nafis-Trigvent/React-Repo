import React from 'react'

export const Card = ({one , two , three  ,four , img}) => {
  return (
    <div className='flex flex-col gap-2 border rounded-lg shadow justify-between px-5 py-2.5 bg-white '>
        <p className='text-2xl font-bold'> {one} </p>
         <p className='line-clamp-2'> {two} </p>
         <img src={img} alt="" className='h-[250px] w-full object-cover mt-3' />
          <p> {three} </p>
           <p> {four} </p>
        
    </div>
  )
}
