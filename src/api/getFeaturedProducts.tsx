import { useEffect, useState } from "react"


export function getFeaturedProducts() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const url = `${import.meta.env.VITE_BACKEND_URL_STRAPI}/api/products?filters[isFeatured][$eq]=true&populate=*`

    useEffect(() => {
        (async () => {
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

    return { error, data, loading }

}

