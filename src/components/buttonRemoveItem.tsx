import { cn } from "@/lib/utils"
import { ProductType } from "@/type/productType"

import { X } from "lucide-react"
interface ButtonRemoveItemProps {
    product: ProductType,
    removeFavorite: (id: number) => void
}
const ButtonRemoveItem = (props: ButtonRemoveItemProps) => {
    const { product, removeFavorite } = props
    return (
        <div>
            <button className={cn('rounded-full flex items-center justify-center bg-white border shadow-sm p-1 hover:scale-105 transition')}>
                <X size={20} onClick={() => removeFavorite(product.id)} />
            </button>
        </div>
    )
}

export default ButtonRemoveItem