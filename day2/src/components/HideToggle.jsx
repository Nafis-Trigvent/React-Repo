import React, { useState } from 'react'

export const HideToggle = () => {
    const [hide , setHide] = useState(false)
    const handleHide = ()=>{
        setHide(!hide) ;
    }
    return (
        <div className='flex justify-center flex-col mt-5 gap-4 w-[50%] mx-auto'>
            <div className='text-3xl'> This paragraph will hide by clicking on button  </div>
            {
                hide ? ( '') : 

                (
                    <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum itaque cum porro voluptas numquam? In, dignissimos dolorum. Quo expedita provident quidem nulla corporis atque at porro vitae architecto natus? </p>
                )
            }
            <button className='border-1 border-black px-4 py-2 bg-black text-white' onClick={handleHide}> 
            { hide ? (" Click for Unhide ") : (" Click for Hide")}    
             </button>
        </div>


    )
}
