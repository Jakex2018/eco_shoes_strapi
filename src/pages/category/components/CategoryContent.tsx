import { getProductCategory } from "@/api/getProductCategory"
import { ProductType } from "@/type/productType"
import { ResponseType } from "@/type/responseType"
import { useParams } from "react-router-dom"

const CategoryContent = () => {
    const params = useParams()
    const { catSlug } = params

    const { data }: ResponseType = getProductCategory(catSlug || '')
    return (
        <div>
            {
                data != null && (
                    data.map((item: ProductType) => {
                        const { productName } = item
                        return <span className="text-4xl">{productName}</span>
                    })
                )
            }
        </div>
    )
}

export default CategoryContent