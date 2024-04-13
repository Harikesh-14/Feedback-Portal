import { Outlet } from "react-router-dom"
import Header from "./container/Header"
import Footer from "./container/Footer"

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout