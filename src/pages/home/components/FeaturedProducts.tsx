
import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { getFeaturedProducts } from "@/api/getFeaturedProducts"
import { ProductType } from "@/type/productType"
import IconButton from "@/components/IconButton"
import { Expand, ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { UseCart } from "@/hooks/useCart"
import SkeletonBody from "./SkeletonBody"

const FeaturedProducts = () => {
    const navigate = useNavigate()
    const { data, loading } = getFeaturedProducts()
    const { addItem } = UseCart()

    return (
        <div className="px-10 sm:px-24 h-[80vh] w-full">
            <span className="text-2xl ml-4">FeaturedProducts</span>
            <Carousel className="mt-7">
                <CarouselContent className="-ml-2 md:-md-4">
                    {
                        loading && (
                            <SkeletonBody grid={3} />
                        )
                    }
                    {
                        data != null && (
                            data.map((item: ProductType) => {
                                const { productName, gender, slug,images } = item
                                return <CarouselItem className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className=" border border-gry-200 shadow-none">
                                            <div className="relative rounded-md overflow-hidden hover:flex ">
                                                <img src={`${import.meta.env.VITE_BACKEND_URL_STRAPI}${images?.url}`} className="w-full h-[250px] object-cover" alt="" />
                                                <div className="absolute h-full rounded-md z-0 w-full px-6 transition duration-200 bg-black opacity-0 group-hover:opacity-70 cursor-pointer ">
                                                    <div className="flex items-center justify-center mt-[30%] z-10 gap-4">
                                                        <IconButton
                                                            onClick={() => navigate(`/product/${slug}`)}
                                                            icon={<Expand size={20}
                                                                className="text-blue-500" />}
                                                        />
                                                        <IconButton
                                                            onClick={() => addItem(item)}
                                                            icon={<ShoppingCart size={20}
                                                                className="text-blue-500" />}
                                                        />
                                                    </div>

                                                </div>
                                            </div>


                                            <div className="flex justify-between p-6 gap-4 items-center">
                                                <h3 className="font-bold text-[15px]">{productName}</h3>
                                                <div className="px-4 py-2 bg-red-600 text-white rounded-[14px]">
                                                    <span className="text-[15px] font-semibold">{gender}</span>
                                                </div>

                                            </div>

                                        </Card>
                                    </div>
                                </CarouselItem>
                            })
                        )
                    }
                </CarouselContent>
                <CarouselPrevious className="absolute -left-8" />
                <CarouselNext className="absolute -right-8" />
            </Carousel>


        </div>
    )
}

export default FeaturedProducts