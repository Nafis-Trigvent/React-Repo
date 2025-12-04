import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const Timer1 = () => {
    const [value , setValue ] = useState(0);
    const [running , setRunning ] = useState(false);

    useEffect(()=>{
        let interval ;
        if(running) {
            interval = setInterval(()=>{
            setValue(value => value + 1)
        }, 1000)
        }

        return ()=> clearInterval(interval);
    } , [running])
  return (
    <div className='flex flex-col items-center justify-center mx-auto gap-4  mt-5'>
        <h2 className='mb-4 text-5xl font-bold '> TIMER APP</h2>
        <p className='text-3xl '>Seconds : {value} </p>
        <div className='flex gap-4 '>
            <button className='p-4 text-2xl bg-black text-white border-none ' onClick={()=>setRunning(true)}> Start</button>
            <button className='p-4 text-2xl bg-black text-white border-none ' onClick={()=> setRunning(false)}> Stop</button>
            <button className='p-4 text-2xl bg-black text-white border-none ' onClick={()=> setValue(0)}> Reset</button>
        </div>
    </div>
  )
}
