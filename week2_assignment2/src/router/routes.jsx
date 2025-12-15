import { createBrowserRouter } from "react-router-dom";
import { Blog } from "../pages/Blog";
import { ParticularBlog } from "../pages/ParticularBlog";
export const routes =  createBrowserRouter([
    {
        path : '/',
        element : <Blog/>
    },
    {
        path : '/posts/:id',
        element : <ParticularBlog/>
    }

])