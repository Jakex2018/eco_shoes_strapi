import { UseFavorite } from "@/hooks/useFavorite"
import FavoriteItemProduct from "./components/favoriteItemProduct"

const Favorite = () => {
    const { itemsFavorite } = UseFavorite()
    return (
        <div className="max-w-4xl py-10 px-10 mx-auto sm:py-32 sm:px-24">
            <h1 className="text-2xl">Favorite products </h1>
            <div>
                <div>
                    {
                        itemsFavorite.length == 0 && (
                            <span>Not Products found</span>
                        )
                    }
                    <ul>
                        {
                            itemsFavorite.map((item) => (
                                <FavoriteItemProduct key={item.id} product={item} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Favorite