import {createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Contact } from '../pages/Contact'
import { About } from '../pages/About'
import { ProtectedRoute } from '../securities/protectedRoute'

export const routes = createBrowserRouter([

    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/login',
        element : <Login/> 
    },
    {
        element : <ProtectedRoute/> , 
        children : [
            {
                path : '/contact',
                element : <Contact/>
            },
            {
                path : '/about',
                element : <About/>
            }
        ]
    }
    
])