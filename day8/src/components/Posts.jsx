import React, { useState } from 'react'
import { useEffect } from 'react'
import { deletePost, getPost } from '../api/PostApi'
import { Form } from './Form'
export const Posts = () => {

    const [post, setPost] = useState([])
    const [updateDataApi, setUpdateDataApi] = useState({})
    const [loading, setLoading] = useState(true);

    // functin for delete post 
    // const handleDeletePost = async (id)=>{
    //   const res = await deletePost(id)
    //   try {
    //     if(res.status === 200 ){
    //         const newUpdatedData = post.filter((curPost)=>{
    //             return curPost.id !== id ;
    //         })
    //         setPost(newUpdatedData) ;
    //     }
    //     console.log("deleted successfully this id data " , id)
    //   } catch (error) {
    //     console.log("failed to delete" , error)
    //   }
    // }

    //pagination states

    const [postData, setPostData] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [postperpage, setpostperpage] = useState(9)
    
    // pagination  numbers array  
    let pages = [];
    let totalpost = post.length;
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        pages.push(i);
    }

    const lastpost = currentpage * postperpage;
    const firstpost = lastpost - postperpage;

    const currentpost = post.slice(firstpost, lastpost)

    // function for handle pagination 
    
    const handlePaginationClick = (page)=>{
        setcurrentpage(page)
    }

    const handleDeletePost = async (id) => {
        const res = await deletePost(id)

        try {
            if (res.status === 200) {
                const newUpdatedData = post.filter((curPost) => {
                    return curPost.id !== id;
                })
                setPost(newUpdatedData)
                console.log("Successfully delete the Data of this id", id)
            }

        } catch (error) {
            console.log("Failed to Delete", error)
        }
    }

    const handleUpdatePost = (item) => setUpdateDataApi(item)

    useEffect(() => {

        const getPostsData = async () => {

            const res = await getPost();
            console.log(res.data)
            setPost(res.data)
            setLoading(false)
        }

        getPostsData()


    }, [])
    return (
        <>
            {
                loading ? (
                    <div className='text-amber-300 text-2xl text-center'> Loading </div>
                ) : (
                    <div>
                        <Form data={post} setData={setPost} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
                        <ul className='grid grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto gap-x-8 gap-y-5 pt-7'>
                            {
                                currentpost.map((item) => {
                                    const { id, body, title } = item
                                    return <ol key={id} className='p-5 flex flex-col justify-between shadow rounded-r-2xl bg-gray-900 border-l-7 text-white border-[white] border-1'>
                                        <p className='text-xl font-semibold capitalize'> <span className='mr-2'>{id} . </span>Title : {title}</p>
                                        <p className='mt-2 mb-4 normal-case'>{body}</p>
                                        <div>
                                            <button
                                                className='bg-green-600 text-white border-0 rounded-lg px-6 py-2'
                                                onClick={() => { handleUpdatePost(item) }}
                                            >Edit</button>
                                            <button
                                                className='bg-red-600 text-white border-0 ml-2 rounded-lg px-6 py-2'
                                                onClick={() => { handleDeletePost(id) }}
                                            >Delete</button>
                                        </div>
                                    </ol>


                                })
                            }
                        </ul>
                        <div className='flex gap-2 justify-center pt-5  absolute bottom-5 left-[50%] transform translate-x-[-50%]'>
                            {
                                pages.map((page, index) => (
                                    <button
                                        key={index}
                                        className={`${currentpage === page ? 'bg-amber-500' : 'bg-black'} text-white px-4 py-2 rounded-sm border border-white`}
                                        onClick={()=>{handlePaginationClick(page)}}
                                    > {page}</button>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
