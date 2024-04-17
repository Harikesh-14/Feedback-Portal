import { useState } from "react"
import { Link } from "react-router-dom"
import { BiUpArrowAlt } from "react-icons/bi"

function BackToTopButton() {
  const [showButton, setShowButton] = useState<Boolean>(false)

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  })

  return (
    <div className={`${showButton ? 'fixed' : 'hidden'} bottom-5 right-5 flex justify-center items-center text-4xl bg-orange-500 text-white rounded-full shadow-lg opacity-80 hover:opacity-100`}>
      <Link to={"#"} className="p-4" onClick={backToTop}>
        <BiUpArrowAlt />
      </Link>
    </div>
  )
}

export default BackToTopButton