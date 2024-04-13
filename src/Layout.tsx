import { Outlet } from "react-router-dom"
import Header from "./container/Header"
import Footer from "./container/Footer"
import BackToTopButton from "./container/BackToTopButton"

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <BackToTopButton />
      <Footer />
    </div>
  )
}

export default Layout