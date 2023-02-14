import NavBar from "./navbar/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;