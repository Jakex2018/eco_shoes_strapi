import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/toaster"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="layout m-auto container">
            <Navbar />
            <Toaster />
            <Outlet />
        </div>
    )
}

export default Layout