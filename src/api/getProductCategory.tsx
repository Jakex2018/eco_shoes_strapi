import { useEffect, useState } from "react";

export function getProductCategory(slug: string | string[]) {
    const url = `${import.meta.env.VITE_BACKEND_URL_STRAPI}/api/products?populate=*&filters[category][slug][$eq]=${slug}`
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

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
            }
        )()
    }, [url])

    return { loading, data, error, }

}