import { ProductType } from "@/type/productType"

interface ButtonGenderProps {
    product: ProductType
}
const ButtonGender = (props: ButtonGenderProps) => {
    const { product } = props
    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 rounded-full text xs text-white bg-black dark:text-black dark:bg-white w-fit">
                {
                    product.gender
                }
            </p>

        </div>
    )
}

export default ButtonGender