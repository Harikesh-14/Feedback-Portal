import { BiX } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"
import { useViewFeedback } from "../context/viewFeedbackContext"

function ViewFullFeedback() {
  const { isFeedbackVisible, setIsFeedbackVisible, fullFeedback } = useViewFeedback()

  return (
    <div className={`w-[25rem] md:w-[40rem] sm:w-[30rem] ${isFeedbackVisible ? "fixed" : "hidden"} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 py-2 px-4 rounded shadow-lg`}>
      <div className="flex justify-between items-center my-4">
        <h1 className="w-[90%] text-center text-2xl md:text-3xl font-semibold">Feedback</h1>
        <p className="w-[10%] flex justify-end">
          <BiX
            className="text-2xl text-gray-400 hover:text-gray-600 hover:bg-slate-200 rounded-full cursor-pointer"
            onClick={() => setIsFeedbackVisible(false)}
          />
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl">{fullFeedback.companyName}</h2>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`text-2xl ${fullFeedback.rating > index ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                <BsStarFill />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-gray-500 text-sm font-light">{fullFeedback.headquarter}</h4>
          <p className="text-gray-900">{fullFeedback.location}</p>
          <p className="border inline-block bg-slate-600 py-1 px-3 rounded-full text-xs mt-3 text-white">{fullFeedback.industry}</p>
        </div>
        <div className="w-full max-h-72 mt-3 overflow-y-auto">
          <h3 className="text-xl font-semibold mb-1">Feedback</h3>
          <p className="text-gray-600">{fullFeedback.feedback}</p>
        </div>
      </div>

    </div>
  )
}

export default ViewFullFeedback