import { useEffect, useState } from "react";

export function getCategory() {
    const url = `${import.meta.env.VITE_BACKEND_URL_STRAPI}/api/categories?populate=*`
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (
            async () => {
                try {
                    const res = await fetch(url)
                    const json = await res.json()
                    setData(json.data)
                    setLoading(false)
                } catch (error: any) {
                    setError(error)
                    setLoading(false)
                }
            })()
    }, [url])

    return { data, loading, error }
}