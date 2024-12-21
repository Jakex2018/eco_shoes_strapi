import { useParams } from "react-router-dom"
import { getProductCategory } from "@/api/getProductCategory"
import { ProductType } from "@/type/productType"
import { ResponseType } from "@/type/responseType"
import ProductCard from "../product/components/ProductCard"
import { Separator } from "@/components/ui/separator"
import FiltersCategory from "./components/FiltersCategory"
import { useState } from "react"
import SkeletonBody from "../home/components/SkeletonBody"

const Category = () => {
    const params = useParams()
    const { catSlug } = params

    const { data, loading }: ResponseType = getProductCategory(catSlug || '')


    const [filteredGender, setfilteredGender] = useState('')

    const filteredProducts = data != null && !loading && (
        filteredGender == '' ? data : data.filter((item: ProductType) => item.gender == filteredGender)
    )
    return (
        <div className="max-w-4xl sm:max-w-[100%] py-12 px-10 sm:px-24 mx-auto">
            {
                data != null && !loading && (
                    <span className="text-2xl">{data[0]?.category?.categoryName}</span>
                )
            }
            <Separator />
            <div className="flex md:flex-row flex-wrap  mt-8 gap-5 md:gap-10 ">
                <FiltersCategory setFilterOrigin={setfilteredGender} />
                <div className="flex md:flex-row flex-wrap md:justify-start justify-center items-center  gap-10">
                    {
                        loading && (
                            <SkeletonBody grid={3} />
                        )
                    }
                    {
                        filteredProducts != null && !loading && (
                            filteredProducts.map((product: ProductType) => {
                                return <ProductCard product={product} key={product.id} />
                            })
                        )
                    }
                    {
                        filteredProducts != null && !loading && filteredProducts.length == 0 && (
                            <h1>Not Found Products</h1>
                        )
                    }
                </div>


            </div>

        </div>
    )
}

export default Category

/*
<Separator />
            <div className="grid md:grid-cols-2  mt-8 gap-5 md:gap-10 ">
                <FiltersCategory setFilterOrigin={setfilteredGender} />
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        loading && (
                            <SkeletonBody grid={3} />
                        )
                    }
                    {
                        filteredProducts != null && !loading && (
                            filteredProducts.map((item: ProductType) => {
                                return <ProductCard product={item} key={item.id} />
                            })
                        )
                    }
                    {
                        filteredProducts != null && !loading && filteredProducts.length == 0 && (
                            <h1>Not Found Products</h1>
                        )
                    }
                </div>


            </div>
*/