import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useApi = ({ url , method , body = null , headers = {}} ) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [reloadFlag, setReloadFlag] = useState(0)

    const reFetch = () => { setReloadFlag(prev => prev + 1) }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios({
                    url,
                    method,
                    data: body,
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                    },
                })
                setData(response.data)
            } catch (error) {
                setError(error?.response?.data?.message || error.message)
            } finally{
                setLoading(false)
            }

        }
        fetchData() 
        console.log("api executed succss")
    } ,[url , method , reloadFlag])
    return {data , loading , error , reFetch }
}
