import { Link } from "react-router-dom"
import { links } from "../DataList/headerLinks"

function Header() {
  return (
    <header>
      <h1>CompRev - Portal</h1>

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header