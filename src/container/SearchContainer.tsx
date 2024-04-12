import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

function SearchContainer() {
  return (
    <section>
      <div>
        <input type="text" placeholder="Company name or industry" />
        <input type="text" placeholder="Location name"/>
        <Link to="">
          <BiSearch />
        </Link>
      </div>
    </section>
  )
}

export default SearchContainer