import React, { useEffect, useState } from 'react'

export default function UseFetch (url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            if(data) {
                setData(data)
                setLoading(false)}
        } catch (e) {
                setErrorMsg(e)
                setLoading(false)
        }
    }
    useEffect(()=> {
    fetchData()
    }, [url])
    
    return {data, loading, errorMsg}
}