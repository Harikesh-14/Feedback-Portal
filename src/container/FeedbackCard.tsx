import { useState } from "react"
import { BiPen, BiX } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { Link } from "react-router-dom"

function FeedbackCard() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleStartClick = (value: number) => {
    setRating(value)
  }

  return (
    <div className="w-[20rem] md:w-[40rem] sm:w-[30rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 py-2 px-4 rounded shadow-lg">
      <div className="flex justify-between items-center my-4">
        <h1 className="w-[90%] text-center text-3xl font-semibold">Give your feedback</h1>
        <p className="w-[10%] flex justify-end">
          <BiX className="text-2xl text-gray-400 hover:text-gray-600 hover:bg-slate-200 rounded-full cursor-pointer" />
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center gap-3 mt-5">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleStartClick(index + 1)}
              className={`cursor-pointer text-4xl ${rating > index ? 'text-yellow-500' : 'text-gray-300'} ${hoverRating > index ? 'text-yellow-500' : 'text-gray-300'} `}
              style={{ transition: "color 0.3s" }}
              onMouseEnter={() => {
                setHoverRating(index + 1)
              }}
              onMouseLeave={() => {
                setHoverRating(0)
              }}
            >
              <BsStarFill />
            </span>
          ))}
        </div>
        <div className="mt-4 ">
          <textarea
            className="w-full p-3 text-lg border border-gray-300 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            placeholder="Enter your feedback here..."
            maxLength={3000}
            required
          />
        </div>
      </div>
      <div className="group w-full mt-6 mb-2 flex justify-center ">
        <Link to={""} className="w-[10rem] flex justify-center items-center  py-2 px-3items-center gap-2 bg-orange-500 rounded text-white hover:bg-orange-600">
          Add Feedback
          <BiPen className="text-xl group-hover:translate-y-0.5 group-hover:-translate-x-0.5 transition-all" />
        </Link>
      </div>
    </div>
  )
}

export default FeedbackCard