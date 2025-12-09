import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Card } from '../components/Card';
export const Movie = () => {
  const [data, setData] = useState([]);
  const APIKEY = "https://jsonfakery.com/movies/paginated";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(APIKEY);
        console.log(res.data.data);
        setData(res.data.data)
      }
      catch (err) {
        console.log("error status" , err.response.status)
        console.log("error status" , err.response.data)
        console.log("error message" , err.message)
      }
    }
    getMovie()
  }, [])
  return (
    <div className='grid grid-cols-4 gap-10 bg-[antiquewhite] '>
      {
        data.map((movie) => (
          <Card key={movie.movie_id} one={movie.original_title} two={movie.overview} img={movie.poster_path} three={movie.release_date} four={movie.vote_average} />
        ))
      }
    </div>
  )
}
