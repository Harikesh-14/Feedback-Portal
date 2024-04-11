import { Link } from "react-router-dom"
import { links } from "../DataList/headerLinks"
import { GrLogin, GrLogout } from "react-icons/gr"

function Header() {
  return (
    <header className="w-full flex flex-wrap">
      <h1>CompRev</h1>

      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))
          }
        </ul>
      </nav>

      <div>
        <Link
          to={""}
          className=""
        >
          Login
          <GrLogin />
        </Link>
        <Link
          to={""}
          className=""
        >
          Register
          <GrLogout />
        </Link>
      </div>

      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}

export default Header