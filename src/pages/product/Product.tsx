import { useParams } from "react-router-dom"
import CarouselProduct from "./components/CarouselProduct"
import InfoProduct from "./components/InfoProduct"
import { ResponseType } from "@/type/responseType"
import { getProductId } from "@/api/getProductId"
import SkeletonProduct from "./components/skeletonProduct"

const Product = () => {
    const params = useParams()
    const { productSlug } = params
    const { data }: ResponseType = getProductId(productSlug || '')

    if (data == null) {
        return <SkeletonProduct />
    }
    return (
        <div className="max-w-6xl py-10  sm:py-32 lg:px-24 mx-auto md:px-10 sm:px-0 px-10">
            <div className="flex sm:flex-row flex-col p-8">
                <div>
                    <CarouselProduct images={data[0].images} />
                </div>
                <div className="md:px-12 sm:px-2 px-1 py-8 sm:py-0">
                    <InfoProduct product={data[0]} />
                </div>
            </div>
        </div>
    )
}

export default Product