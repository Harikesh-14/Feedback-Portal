import { BiUpArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

function BackToTopButton() {
  return (
    <div className="fixed bottom-5 right-5 flex justify-center items-center text-4xl bg-orange-500 text-white rounded-full shadow-lg opacity-80 hover:opacity-100">
      <Link to={""} className="p-4">
        <BiUpArrowAlt />
      </Link>
    </div>
  )
}

export default BackToTopButton