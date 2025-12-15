import React from 'react'

export const BlogCard = ({ id_, title_, body_  ,onClick}) => {
    return (
        <div className='p-5 flex flex-col justify-between shadow rounded-r-2xl bg-gray-900 border-l-7 text-white border-[white] border-1 transform transition-transform transition-all duration-600  linear hover:-translate-y-2 '>
            <p className='text-xl font-semibold capitalize'> <span className='mr-2'>{id_} . </span>Title : {title_}</p>
            <p className='mt-2 mb-4 normal-case'>{body_}</p>
            <div>
                <button
                    className='bg-green-600 text-white border-0 rounded-lg px-6 py-2'
                // onClick={() => { handleUpdatePost(item) }}
                >Edit</button>
                <button
                    className='bg-red-600 text-white border-0 ml-2 rounded-lg px-6 py-2'
                // onClick={() => { handleDeletePost(id) }}
                >Delete</button>
            </div>  
             <button className='text-xl text-left mt-2' onClick={onClick}> Read more ....</button>
        </div>
    )
}
