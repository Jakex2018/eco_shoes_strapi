import { formatPrice } from '@/components/formatPrice'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Heart } from 'lucide-react'
import ButtonGender from '../../../components/shared/ButtonGender'
import { ProductType } from '@/type/productType'
import { UseFavorite } from '@/hooks/useFavorite'
import { UseCart } from '@/hooks/useCart'


interface InfoProductProps {
    product: ProductType
}
const InfoProduct = (props: InfoProductProps) => {
    const { addFavorite } = UseFavorite()
    const { addItem } = UseCart()
    const { product } = props
    return (
        <div className="px-6">
            <div className="justify-between mb-3 sm:flex-col">
                <h3 className="text-2xl mb-4">{product.productName}</h3>
                <ButtonGender product={product} />

            </div>
            <Separator className="my-4" />
            <p>{product.description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl">
                {formatPrice(product.price)}
            </p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => addItem(product)}>Comprar</Button>

                <Heart width={30} strokeWidth={1}
                    className="transition duration-300 cursor-pointer hover:fill-black"
                    onClick={() => addFavorite(product)} />
            </div>
        </div>
    )
}

export default InfoProduct