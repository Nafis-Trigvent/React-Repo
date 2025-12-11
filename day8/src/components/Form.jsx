import React, { useEffect, useState } from 'react'
import { addPost, updateDataOriginalApi } from '../api/PostApi';

export const Form = ({ data, setData, setUpdateDataApi, updateDataApi }) => {

    // state for store the user inputs 
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    })

    // const handleChange = (e)=>{
    //     const name = e.target.name ;
    //     const value = e.target.value ;
    //     setAddData((prev)=>{
    //         return {
    //             ...prev , [name] : value 
    //         }
    //     })

    // }

    // funciton for track user inputs and set it to state 
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // const postDataaa = async ()=>{
    //   const  res = await addPost(addData)
    //   try {
    //     if(res.status === 201 ){
    //         setData([...data , res.data])
    //          console.log("Card added successfully" , addData)
    //         setAddData({title: "", body: "",})
    //     }
    //   } catch (error) {
    //     console.log("failed" , error)
    //   }
    // }


    // function for add data to actual api also add that data to state for update it 
    const postDataaa = async () => {
        // adding data to actual api 
        const res = await addPost(addData)

        // updating data to original state to show on ui 
        try {
            if (res.status === 201) {
                setData([...data, res.data])
                setAddData({title: "", body: "",})
                console.log(" successfully added the data", res.data)
            }
        } catch (error) {
            console.log("failed", error)
        }

    }

    const updatePostdata = async () => {
        try {

            const res = await updateDataOriginalApi(updateDataApi.id, addData)
            console.log(res)

            if (res.status === 200) {
                setData((prev) => {
                    return prev.map((curElement) => {
                        return updateDataApi.id === curElement.id ? res.data : curElement
                    })
                })

            }
            setAddData({title: "", body: "",})
            setUpdateDataApi({})
        } catch (error) {
            console.log("update failed ", error)
        }
    }
    // preventing default behaviour and calling the postDataaa funtion by onclick of
    const handleSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value;
        if (action === 'Add') {
            postDataaa()
        } else if (action === 'Edit') {
            updatePostdata()
        }

    }

    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || '',
            body: updateDataApi.body || '',
        })
    }, [updateDataApi])

    const isEmpty = Object.keys(updateDataApi).length === 0;
    // console.log(addData)
    return (
        <form className='bg-gray-900 p-3 flex gap-x-5 gap-y-2 max-w-[36%] mx-auto items-center justify-center flex-col lg:flex-row'
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className='px-4 py-2 bg-white text-black rounded-sm'
                placeholder='enter title'
                value={addData.title}
                name='title'
                onChange={handleChange}
            />
            <input
                type="text"
                className='px-4 py-2 bg-white text-black rounded-sm'
                placeholder='enter body'
                value={addData.body}
                name="body"
                onChange={handleChange}
            />
            <button
                className='px-6 py-2 text-white bg-green-600 rounded-sm'
                value={isEmpty ? 'Add' : 'Edit'}
            > {isEmpty ? 'Add' : 'Edit'}</button>
        </form>
    )
}
