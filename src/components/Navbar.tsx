import { UseCart } from "@/hooks/useCart"
import { UseFavorite } from "@/hooks/useFavorite"
import MenuDesktop from "@/pages/home/components/MenuDesktop"
import MenuMobile from "@/pages/home/components/MenuMobile"
import { Heart, ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const cart = UseCart()
    const navigate = useNavigate()
    const { itemsFavorite } = UseFavorite()
    return (
        <div className="flex items-center mt-5  justify-between xl:px-2 sm:px-10 px-8 mx-auto sm:max-w-4xl md:max-w-5xl">
            <h1 className="text-3xl font-bold text-black cursor pointer">Shoes
                <strong className="text-red-700"> Web</strong></h1>
            <div className="md:flex hidden ml-[40%]">
                <MenuDesktop />
            </div>
            <div className="flex md:hidden">
                <MenuMobile />
            </div>
            <div className="flex items-center gap-4">
                {
                    cart.items.length == 0 ? <ShoppingCart
                        className="cursor-pointer hover:opacity-50 duration-400"
                        onClick={() => navigate('/cart')}
                        strokeWidth='1' /> :
                        <div className="flex gap-3">
                            <ShoppingCart
                                className="cursor-pointer hover:opacity-50 duration-400"
                                onClick={() => navigate('/cart')}
                                strokeWidth='1' />
                            <span>{cart.items.length}</span>
                        </div>
                }
                <Heart onClick={() => navigate('favorite')}
                    className={`cursor-pointer hover:opacity-50 duration-400 ${itemsFavorite.length > 0 && 'fill-black dark:fill-white'
                        }`}
                    strokeWidth='1'
                />
            </div>
        </div>
    )
}

export default Navbar