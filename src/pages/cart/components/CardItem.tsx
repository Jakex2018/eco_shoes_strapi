
import { formatPrice } from "@/components/formatPrice"
import ImageItem from "@/components/shared/ImageItem"
import { UseCart } from "@/hooks/useCart"
import { cn } from "@/lib/utils"
import ButtonGender from "@/components/shared/ButtonGender"
import { ProductType } from "@/type/productType"

import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface CardItemProps {
    product: ProductType
}

const CardItem = (props: CardItemProps) => {
    const { product } = props
    const navigate = useNavigate()
    const { removeItem } = UseCart()
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => navigate(`/product/${product.slug}`)}>
                <ImageItem item={product?.images?.url}
                    className="size-[52px] lg:size-[200px] object-cover"
                />

            </div>

            <div className="flex justify-between flex-1 px-6">

                <h2 className="text-lg font-bold ">{product.productName}</h2>

                <p className="font-bold">{formatPrice(product.price)}</p>
            </div>
            <ButtonGender product={product} />

            <div>

                <button onClick={() => removeItem(product.id)} className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-105 transition")}>
                    <X size={20} />
                </button>
            </div>
        </li>
    )
}

export default CardItem