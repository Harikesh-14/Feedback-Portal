import { Outlet } from "react-router-dom"
import Header from "./container/Header"

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout