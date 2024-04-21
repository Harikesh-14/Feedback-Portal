import { Link } from "react-router-dom"

function ViewPartialFeedback() {
  const fullFeedback = () => {
    console.log("Full feedback")
  }

  return (
    <div className="w-full max-w-[30rem] my-5 flex mx-auto border rounded-lg shadow md:hover:shadow-lg md:hover:scale-[1.01] hover:-translate-y-1 transition-all">
      <div className="hidden md:w-1/4 md:flex justify-center items-center border-r">
        <img
          src="../../google_logo.png"
          alt="Company Logo"
          className="w-28 h-28 p-4"
        />
      </div>
      <div className="flex flex-col w-full md:w-3/4 py-4 px-4 md:px-8">
        <div className="pb-5">
          <h2 className="text-2xl font-semibold pb-2">company name</h2>
          <h4 className="text-gray-500 text-sm font-light">headquarter</h4>
          <p className="text-gray-900">location</p>
          <p className="border inline-block bg-slate-600 py-1 px-3 rounded-full text-xs mt-3 text-white">industry</p>
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