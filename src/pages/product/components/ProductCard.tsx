import { ProductType } from "@/type/productType"
import IconButton from "@/components/IconButton"
import { Expand, ShoppingCart } from "lucide-react"
import ButtonGender from "../../../components/shared/ButtonGender.tsx"
import { formatPrice } from "@/components/formatPrice"
import { UseCart } from "@/hooks/useCart"
import { useNavigate } from "react-router-dom"



interface ProductCartProps {
    product: ProductType
}

const ProductCard = (props: ProductCartProps) => {
    const { product } = props
    const { addItem } = UseCart()
    const navigate = useNavigate()


    const imageUrl = `${import.meta.env.VITE_BACKEND_URL_STRAPI}${product.images.url}`

    return (
        <div className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-10 top-4">
                <ButtonGender product={product} />
            </div>


            <div className="relative hover:flex">
                <img
                    src={imageUrl}
                    className="w-full h-[250px] object-cover"
                    alt={product.productName}
                />
                <div className="absolute top-0 z-30 bottom-0 left-0 right-0 h-full w-full px-6 transition duration-200 bg-black opacity-0 hover:opacity-70 cursor-pointer">
                    <div className="flex items-center justify-center mt-[40%] gap-4">
                        <IconButton
                            onClick={() => navigate(`/product/${product.slug}`)}
                            icon={<Expand size={20} className="text-blue-500" />}
                        />
                        <IconButton
                            onClick={() => addItem(product)}
                            icon={<ShoppingCart size={20} className="text-blue-500" />}
                        />
                    </div>
                </div>
            </div>

            <p className="text-2xl text-center">{product.productName}</p>
            <p className="font-bold text-center">{formatPrice(product.price)}</p>
        </div>
    )
}



export default ProductCard



