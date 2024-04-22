import { Link } from "react-router-dom"
import { FeedbackDataT } from "../types"
import { BsStarFill } from "react-icons/bs"
import { useViewFeedback } from "../context/viewFeedbackContext"
import { useEffect } from "react"

function ViewPartialFeedback({ companyName, headquarter, feedback, industry, location, rating, createdAt }: FeedbackDataT) {
  const { toggleVisibility, setFullFeedback } = useViewFeedback()

  const fullFeedback = () => {
    toggleVisibility()
    setFullFeedback({ companyName, headquarter, feedback, industry, location, rating, createdAt })
  }

  console.log(companyName, headquarter, industry, location, rating, createdAt)

  return (
    <div className="w-full max-w-[40rem] my-5 flex mx-auto border rounded-lg shadow md:hover:shadow-lg md:hover:scale-[1.01] hover:-translate-y-1 transition-all">
      <div className="hidden md:w-1/4 md:flex justify-center items-center border-r">
        <img
          src="../../google_logo.png"
          alt="Company Logo"
          className="w-28 h-28 p-4"
        />
      </div>
      <div className="flex flex-col w-full md:w-3/4 py-4 px-4 md:px-8">
        <div className="pb-5">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold pb-2">{companyName}</h2>
            <div className="flex flex-col-reverse justify-end items-center gap-1 mt-2">
              <p className="text-xs font-medium text-gray-400">{createdAt}</p>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <BsStarFill />
                  </span>
                ))}
              </div>
            </div>
          </div>
          <h4 className="text-gray-500 text-sm font-light">{headquarter}</h4>
          <p className="text-gray-900">{location}</p>
          <p className="border inline-block bg-slate-600 py-1 px-3 rounded-full text-xs mt-3 text-white">{industry}</p>
        </div>
        <div className="w-full flex justify-center">
          <Link
            to={""}
            className="w-[8rem] py-2 px-3 bg-orange-600 text-white rounded outline-none active:shadow-lg active:bg-orange-700"
            onClick={fullFeedback}
          >
            Full feedback
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ViewPartialFeedback