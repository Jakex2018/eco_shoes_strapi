import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { LucideMenu } from "lucide-react"
import { Link } from "react-router-dom"

const MenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <LucideMenu />
            </PopoverTrigger>
            <PopoverContent>
                <Link to='/' className="block">
                    Home
                </Link>

                <Link to='/cart' className="block">
                    Cart
                </Link>
            </PopoverContent>
        </Popover>
    )
}

export default MenuMobile