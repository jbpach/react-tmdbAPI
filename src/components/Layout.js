import NavBar from "./navbar/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"

const Layout = ({search, setSearch}) => {
    return (
        <div>
            <NavBar search={search} setSearch={setSearch}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;