import React from 'react'
import { useForm } from '../hooks/useForm'

export const Form = () => {
    const { handleClick, formData, resetForm } = useForm({
        email: '',
        password : ''
    })
    return (
        <div>
            <form action="" className='flex flex-col gap-5 mt-6'>
                <input
                    type="text"
                    name='email'
                    onChange={handleClick}
                    value={formData.email}
                    className='px-4 py-2 border-1 '
                    placeholder='enter email'

                />

                <input
                    type="text"
                    name='password'
                    onChange={handleClick}
                    value={formData.password}
                    className='px-4 py-2 border-1 '
                    placeholder='enter password'
                />
                <button onClick={resetForm} className='bg-black text-white px-4 py-2 '> Reset Form </button>
                <p className='text-xl '> Entered Email {formData.email} and Password { formData.password}</p>
            </form>
        </div>
    )
}
