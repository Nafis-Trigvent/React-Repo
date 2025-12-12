import React from 'react'

export const Card = ({one , two , three  ,four , img}) => {
  return (
    <div className='flex flex-col gap-2 border-l-7 border-1 shadow justify-between px-5 py-2.5 bg-black text-white w-[300px]'>
        <p className='text-2xl font-bold'> {one} </p>
         <p className='line-clamp-2'> {two} </p>
         <img src={img} alt="" className='h-[250px] w-full object-cover mt-3' />
          <p> {three} </p>
           <p> {four} </p>
        
    </div>
  )
}