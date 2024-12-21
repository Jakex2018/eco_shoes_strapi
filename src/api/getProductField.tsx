import { dataFilterTypes } from "@/type/filters"
import { useEffect, useState } from "react"


export function getProductField() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<dataFilterTypes | null>(null)
    const [error, setError] = useState('')
    const url = `${import.meta.env.VITE_BACKEND_URL_STRAPI}/api/content-type-builder/content-types/api::product.product`

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