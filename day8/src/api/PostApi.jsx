import axios  from "axios";

const api = axios.create({
   baseURL : "https://jsonplaceholder.typicode.com" 
})

// function for get data 
export const getPost = ()=>{
    return api.get("/posts")
}

// function for delete data 

// export const deletePost = (id)=>{
//     return api.delete(`/posts/${id}`)
// }

export const deletePost = (id)=>{
    return api.delete(`/posts/${id}`)
}

// function for add data in api or create 
export const addPost = (post)=>{
    return api.post("/posts " , post)
}

// function for update data 
export const updateDataOriginalApi = (id , post )=>{
    return api.put(`/posts/${id}`,post)
}