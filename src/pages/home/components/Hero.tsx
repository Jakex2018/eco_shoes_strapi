import { getCategory } from "@/api/getCategory"
import { CategoryType } from "@/type/categoryType"
import { Link } from "react-router-dom"
import SkeletonBody from "./SkeletonBody"


const Hero = () => {
    const { data, loading } = getCategory()
    const url = import.meta.env.VITE_BACKEND_URL_STRAPI

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14">
            <div className="grid sm:grid-cols-2 gap-5 p-5 sm:p-0">
                {
                    loading && (
                        <SkeletonBody grid={3} />
                    )
                }
                {
                    data != null && (
                        data.map((item: CategoryType) => {
                            if (item.id == 1) {
                                return <Link to={`/category/${item.slug}`}>
                                    <div className="group overflow-hidden relative cursor-pointer hover:opacity-90 rounded-xl  transition duration-200">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-xl">
                                        </div>
                                        <div className="absolute top-[45%] left-0 0 right-0 bottom-0">
                                            <span className="text-white text-4xl font-bold flex justify-center">{item.categoryName}</span>
                                        </div>
                                        <img src={`${url}${item.mainImage.url}`} className="group-hover:scale-105 duration-200 transition-all w-[700px] h-[500px] cursor-pointer object-cover rounded-lg" alt="" />
                                    </div>
                                </Link>
                            }
                        })
                    )
                }

                <div className="grid grid-rows-2 gap-6">
                    {
                        data.map((item: CategoryType) => {
                            if (item.id != 1) {
                                return <Link to={`/category/${item.slug}`}>
                                    <div className="group overflow-hidden relative cursor-pointer hover:opacity-90 rounded-xl  transition duration-200">
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-xl">

                                        </div>
                                        <div className="absolute top-[45%] left-0 0 right-0 bottom-0">
                                            <span className="text-white text-4xl font-bold flex justify-center">{item.categoryName}</span>
                                        </div>
                                        <img src={`${url}${item.mainImage.url}`} className="group-hover:scale-105 duration-200 transition-all w-[700px] h-[237px] cursor-pointer object-cover rounded-lg" alt="" />
                                    </div>
                                </Link>
                            }
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Hero




/*
const categoryItem = [{
    id: 1,
    name: 'Jordan',
}, {
    id: 2,
    name: 'Nike',
}, {
    id: 3,
    name: 'Addidas',
}]
const Hero = () => {
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-14">
            <div className="grid sm:grid-cols-2 gap-5 p-5 sm:p-0">
                {
                    categoryItem.map((item) => {
                        if (item.id == 1) {
                            return <div className="relative cursor-pointer hover:opacity-90  transition duration-200">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-xl">
                                </div>
                                <div className="absolute top-[45%] left-0 0 right-0 bottom-0">
                                    <span className="text-white text-4xl font-bold flex justify-center">{item.name}</span>
                                </div>
                                <img src="/banner01.jpg" className=" w-[700px] h-[500px] cursor-pointer object-cover rounded-lg" alt="" />
                            </div>
                        } else {
                            return <div className="grid grid-rows-2 gap-6">
                                <div className="relative cursor-pointer hover:opacity-90  transition duration-200">
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-xl">
                                    </div>
                                    <div className="absolute top-[45%] left-0 0 right-0 bottom-0">
                                        <span className="text-white text-4xl font-bold flex justify-center">asds</span>
                                    </div>
                                    <img src="/banner02.jpg" className="w-[700px] h-[237px] cursor-pointer object-cover rounded-lg" alt="" />
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Hero
*/