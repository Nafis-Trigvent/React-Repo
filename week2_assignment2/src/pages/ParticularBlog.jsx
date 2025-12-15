import React from 'react'
import { useEffect, useState } from 'react'
import { singleBlog } from '../api/BlogApi'
import { useParams } from 'react-router-dom'
import { BlogCard } from '../components/BlogCard'



export const ParticularBlog = () => {

    // getting id from url 
    const params = useParams();
    const id = params.id

    // state for manage the blog details 
    const [postData, setData] = useState()

    // console.log(id)
    useEffect(() => {
        const oneblog = async () => {
            try {
                const res = await singleBlog(id);
                console.log(res.data)
                setData(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        oneblog()
    }, [id])

    if (!postData) {
        return <div> Loading ... </div>
    }

    const { body, userId, title } = postData
    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            {
                postData &&
                (
                    <div className='w-[500px] '>
                        <BlogCard id_={userId} body_={body} title_={title} />
                    </div>
                )
            }

        </div>
    )
}
