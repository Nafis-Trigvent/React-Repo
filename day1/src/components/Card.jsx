import React from 'react'

export const Card = ({productname , desc , img , brand }) => {
  return (
    <div className='flex flex-col gap-2.5 border-2 rounded-xl h-[400px] w-[300px] p-4 text-white bg-black'>
        <p className='text-2xl text-center  '> {productname}</p>
        <p className='text-center'> {desc} </p>
        <img src={img} alt="" />
        <p>{brand}</p>
    </div>
  )
}
