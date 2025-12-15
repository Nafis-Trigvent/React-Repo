import React from 'react'
import { useEffect, useState } from 'react'
import { getPost } from '../api/BlogApi'
import { BlogCard } from '../components/BlogCard'
import { useNavigate } from 'react-router-dom'

export const Blog = () => {

    const naviagte = useNavigate()

    const [postData, setData] = useState([])

    useEffect(() => {

        const getPosts = async () => {
            try {
                const res = await getPost();
                const result = res.data;
                console.log(result)
                setData(result)
                console.log(postData)

            } catch (err) {
                console.log(err)
            }
        }
        getPosts()
    }, [])


    // pagination states 

    const [currnetIndex, setCurrentIndex] = useState(1)
    const [postsPerpage, setPostPerPage] = useState(9)

    // pagination logic 
    const lastIndexofPage = currnetIndex * postsPerpage;
    const firstIndexofPage = lastIndexofPage - postsPerpage;

    const currentPost = postData.slice(firstIndexofPage, lastIndexofPage)

    // array for store pages of pagination 
    const pages = []

    // for show naviagte button based on currentIndex 

    for (let i = 1; i < Math.ceil(postData.length / postsPerpage); i++) {
        pages.push(i)
    }

    // move to another page 

    const handleClick = (id)=>{
        naviagte(`/posts/${id}`)
    }

    return (
        <div >
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7 max-w-[90%] mx-auto mt-10'>
                {
                    currentPost.map((item) => {
                        const { id, body, title } = item
                        return <BlogCard id_={id} title_={title} body_={body} key={id} onClick={()=>{ handleClick(id)}} />
                    })
                }

            </div>
            <br />
            <div
                className='flex gap-2 justify-center mb-10 mt-5'>
                {
                    pages.map((page , index) => {
                       return <button
                            key={index}
                            className='px-6 py-3 border-1 border-[green] shadow bg-black text-white rounded-sm'
                            onClick={() => { setCurrentIndex(page) }}
                        > {page}</button>
                    })
                }
            </div>
        </div>
    )
}
