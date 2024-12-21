import { CategoryType } from "@/type/categoryType"
import { ProductType } from "@/type/productType"


interface ImageItemProps {
    item: ProductType | CategoryType | string
    className?: string
}

const ImageItem = (props: ImageItemProps) => {
    const url = `${import.meta.env.VITE_BACKEND_URL_STRAPI}`
    const { item, className } = props
    return (
        <img
            className={className}
            src={`${url}${item}`}
            alt="" />
    )
}

export default ImageItem