import { useState } from "react"
import { BiX } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { Link } from "react-router-dom"

function FeedbackCard() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const handleStartClick = (value: number) => {
    setRating(value)
  }

  return (
    <div className="w-[20rem] md:w-[40rem] sm:w-[30rem] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="w-[90%] text-center text-2xl font-semibold">Give your feedback</h1>
        <p className="w-[10%]">
          <BiX className="text-2xl text-gray-400" />
        </p>
      </div>
      <div>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleStartClick(index + 1)}
              className={`cursor-pointer text-4xl ${rating > index ? 'text-yellow-600' : 'text-gray-300'} ${hoverRating > index ? 'text-yellow-600' : 'text-gray-300'} `}
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
        <div>
          <textarea
            className=""
            placeholder="Enter your feedback here"
            maxLength={3000}
            required
          />
        </div>
      </div>
      <div>
        <Link to={""}>Add Feedback</Link>
      </div>
    </div>
  )
}

export default FeedbackCard
