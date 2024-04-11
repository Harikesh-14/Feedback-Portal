import { Link } from "react-router-dom"
import { links } from "../DataList/headerLinks"
import { GrLogin, GrLogout } from "react-icons/gr"

function Header() {
  return (
    <header className="fixed w-full px-10 flex flex-col flex-wrap gap-3 justify-center items-center bg-gray-200 md:flex-row md:py-2 md:justify-between">
      <h1 className="text-gray-900 text-4xl font-semibold md:text-3xl">CompRev</h1>

      <nav>
        <ul className="flex flex-col gap-4 md:flex-row">
          {links.map((link, index) => (
            <li key={index} className="h-full flex justify-center items-center px-2 text-xl font-sans hover:bg-gray-300">
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-5">
        <Link
          to={""}
          className="group flex items-center gap-1 px-6 py-2 bg-gray-950 rounded-full text-gray-100 shadow-md hover:bg-gray-800 hover:shadow-lg transition ease-linear"
        >
          Login
          <GrLogin
            className="group-hover:translate-x-1 transition-all"
          />
        </Link>
        <Link
          to={""}
          className="group flex items-center gap-1 px-6 py-2 bg-gray-950 rounded-full text-gray-100 shadow-md hover:bg-gray-800 hover:shadow-lg transition ease-linear"
        >
          Register
          <GrLogout
            className="group-hover:translate-x-1 transition-all"
          />
        </Link>
      </div>

      <div className="md:hidden flex flex-col gap-1 absolute top-3 right-4">
        <span className="w-8 h-1 rounded-full bg-black"></span>
        <span className="w-8 h-1 rounded-full bg-black"></span>
        <span className="w-8 h-1 rounded-full bg-black"></span>
      </div>
    </header>
  )
}

export default Header