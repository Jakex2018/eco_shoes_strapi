import ButtonRemoveItem from "@/components/buttonRemoveItem"
import { formatPrice } from "@/components/formatPrice"
import ImageItem from "@/components/shared/ImageItem"
import { Button } from "@/components/ui/button"
import { UseCart } from "@/hooks/useCart"
import { UseFavorite } from "@/hooks/useFavorite"
import ButtonGender from "@/components/shared/ButtonGender"
import { ProductType } from "@/type/productType"
import { useNavigate } from "react-router-dom"


interface FavoriteItemProps {
    product: ProductType
}
const FavoriteItemProduct = (props: FavoriteItemProps) => {
    const { product } = props
    const router = useNavigate()
    const { removeFavorite } = UseFavorite()
    const { addItem } = UseCart()

    const addCheckout = () => {
        addItem(product)
        removeFavorite(product.id)
    }
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router(`/product/${product.slug}`)}>
                <ImageItem item={product.images.url} className="w-40" />
            </div>
            <div className="flex justify-between flex-1 px-6">

                <div>
                    <h2 className="text-lg font-bold">{product.productName}</h2>
                    <p className="font-bold sm:mb-2 mb-5">{formatPrice(product.price)}</p>
                    <ButtonGender product={product} />
                    <Button className="mt-5 rounded-full"
                        onClick={addCheckout}>Add Cart</Button>
                </div>

                <ButtonRemoveItem product={product} removeFavorite={removeFavorite} />
            </div>
        </li>
    )
}

export default FavoriteItemProduct

