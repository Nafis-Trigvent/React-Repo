import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import pepsi_bottle from '../assets/images/pepsi bottle.jpg'
export const Homepage = () => {
    return (
       <div className='relative '>
            <Navbar/>
            <div className='h-[70vh] pt-8 w-[90%] mx-auto'>
                <Card productname={"Pepsi"} img={pepsi_bottle} brand={"Pepsi"} desc={"Second choice of people"}/>
            </div>
            <Footer/>
       </div>
    )
}
