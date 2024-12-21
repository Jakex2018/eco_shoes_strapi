import { Link } from "react-router-dom"

const navLinks = [
    {
        name: 'Home',
        link: '/'
    },

    {
        name: 'Cart',
        link: '/cart'
    }
]

const MenuDesktop = () => {
    return (
        <div className="flex gap-9">
            <ul className="flex items-center gap-9">{
                navLinks.map((item) => (
                    <li key={item.name} className="hover:opacity-70 text-gray-900 font-semibold">
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))
            }</ul>

        </div>
    )
}

export default MenuDesktop