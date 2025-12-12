import React from 'react'
// import { useFetch } from '../hooks/useFetch'
import { Card } from '../components/Card'
import { Form } from '../components/Form'
import { useAuth } from '../hooks/useAuth'
// import { useApi } from '../hooks/useApi'
export const Homepage = () => {
    const APIKEY = "https://jsonfakery.com/movies/paginated"

    // const { loading, error, data } = useFetch({ url : APIKEY ,inital : []}) 

    //    const {loading , error , reFetch , data  } = useApi({
    //     url : APIKEY , 
    //     method : "GET" ,
    //    })

    const { loading, error, login, isAuthenticated, setLoading } = useAuth()
    console.log(loading)
    const handleLogin = async () => {
        await login("test@gmail.com", "123456");
        setLoading(false);
    }
    return (
        <div className='max-w-[90%] mx-auto'>


            {/* <div className='grid grid-cols-5 gap-x-10 gap-y-4'>
             {
                
                data?.data?.map((movie, index) => {
                    const { vote_average, release_date, poster_path, overview, original_title } = movie;
                    return <Card key={index} one={original_title} two={overview} three={release_date} img={poster_path} four={vote_average} />
                })
            }
           </div> */}
            {/* <button className='px-4 py-2 bg-black text-white mt-10 ml-10' onClick={()=>{ reFetch()}}> reload data </button> */}
            <button
                onClick={handleLogin}
                className='px-4 py-2 bg-black text-white mt-10 ml-10'
            > {
                    loading && <p> loading ..........</p>
                } </button>

            {
                error && <p> Error .. aara hai </p>
            }
            {
                isAuthenticated && <p> logged in successfully </p>
            }
        </div>
    )
}
