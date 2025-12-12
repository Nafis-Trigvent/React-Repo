import React, { useEffect, useState } from 'react'

export const useFetch = ({ url, inital }) => {
    console.log("run success")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(inital)

    useEffect(() => {
        console.log("useEffect runs")
        const apicall = async () => {
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    setError(true)
                    setLoading(false)
                }
                const result = await res.json();
                setData(result.data)
                console.log(result.data)
            } catch (error) {   
                setError(true)
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        apicall()
    }, [url])
    return { loading, error, data };
}
