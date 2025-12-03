import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-black w-full'>
            <div className='flex w-[90%] mx-auto justify-between py-7'>
                <div className='flex items-center'>
                    <div className='text-5xl text-white'>Trigvent </div>
                </div>
                <div className='flex gap-5 flex-col text-white'>
                    <p>Home</p>
                    <p>Projects</p>
                    <p>About Us</p>
                    <p>Contact us</p>
                </div>
                <div className='flex gap-5 flex-col text-white '>
                    <h3>Contact us</h3>
                    <p>Instagram </p>
                    <p>Facebook </p>
                    <p>Twitter</p>
                    <p>Linked In</p>
                </div>
                <div className='flex gap-5 flex-col text-white '>
                    <h3>Privacy Policy</h3>
                    <h3>Blogs</h3>
                    <h3>News</h3>
                    <h3>Copyright Policy</h3>
                </div>
            </div>
        </footer>
    )
}
