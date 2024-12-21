
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { toast } from "./use-toast"
import { ProductType } from '@/type/productType'

interface FavoriteStore {
    itemsFavorite: ProductType[],
    addFavorite: (data: ProductType) => void,
    removeFavorite: (id: number) => void,
}

export const UseFavorite = create(persist<FavoriteStore>((set, get) => ({
    itemsFavorite: [],
    addFavorite: (data: ProductType) => {
        const currentItem = get().itemsFavorite
        const existingItem = currentItem.find((item) => item.id == data.id)
        if (existingItem) {
            return toast({
                title: "EL producto ya existe en la lista",
                variant: 'destructive'
            })
        }
        set({
            itemsFavorite: [...get().itemsFavorite, data]
        })
        toast({
            title: 'Producto agregado a la lista'
        })
    },
    removeFavorite: (id: number) => {
        set({
            itemsFavorite: [...get().itemsFavorite.filter((item) => item.id != id)]
        }),
            toast({
                title: 'Producto eliminado de la lista'
            })
    },

}), {
    name: 'favorite-storage',
    storage: createJSONStorage(() => localStorage)
},))