import React from 'react'
import { Button } from '../Buttons/Button'
import ReactDom from 'react-dom'

export const Modal = ({ setShowModal }) => {

    function handleClick() {
        setShowModal(false)
    }
    return ReactDom.createPortal(
        <>
            <div className='fixed top-0 bottom-0 left-0 right-0 backdrop-blur'></div>
            <div className=' fixed max-w-[40%] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[burlywood] p-5 rounded-lg'>
                <div className='relative'>
                    <h2 className='mb-4'> Stay Tuned </h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi quisquam impedit veritatis? Nemo, odio temporibus minus rerum neque exercitationem maxime voluptatem inventore laudantium excepturi aut eveniet et reiciendis odit.</p>
                    <Button text={'I Accept'} bg={'bg-black'} font_color={'white'} padding={'12px'} onClick={handleClick} />
                    <div className='absolute top-0 right-0 text-[red] font-bold cursor-pointer bg-white px-2 py-0.5'
                        onClick={handleClick}
                    > X </div>
                </div>
            </div>
        </> ,
        document.querySelector(".myPortalDiv")
    )
}
