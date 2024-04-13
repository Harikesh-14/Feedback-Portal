import { Link } from "react-router-dom"
// import { companiesData } from "../DataList/companiesDataList"

// type CompanyCardProps = (typeof companiesData)[number]

type CompanyCardProps = {
  companyName: string
  headquarter: string
  location: string
  industry: string
}

function CompanyCard({ companyName, headquarter, location, industry}: CompanyCardProps) {
  return (
    <div className="w-full max-w-[40rem] my-5 flex mx-auto border rounded-lg shadow md:hover:shadow-lg md:hover:scale-[1.01] hover:-translate-y-1 transition-all">
      <div className="hidden md:w-1/5 md:flex justify-center items-center border-r">
        <img
          src="../../google_logo.png"
          alt="Company Logo"
          className="w-28 h-28 p-4"
        />
      </div>
      <div className="flex flex-col w-4/5 md:w-3/5 py-4 px-4 md:px-8">
        <div className="pb-5">
          <h2 className="text-2xl font-semibold pb-2">{companyName}</h2>
          <h4 className="text-gray-500 text-sm font-light">{headquarter}</h4>
          <p className="text-gray-900">{location}</p>
          <p className="border inline-block bg-slate-600 py-1 px-3 rounded-full text-xs mt-3 text-white">{industry}</p>
        </div>
        <div className="w-full flex justify-center">
          <Link to={""} className="w-[8rem] py-2 px-3 bg-orange-600 text-white rounded outline-none active:shadow-lg active:bg-orange-700" >
            Give feedback
          </Link>
        </div>
      </div>
      <div className="md:w-1/5 p-4 flex flex-col justify-center items-center gap-4 border-l">
        <div className="h-20 w-20 border-2 border-gray-200 rounded bg-gray-100 flex flex-col">
          <p className="h-[90%] text-3xl flex items-center justify-center">10</p>
          <p className="text-center font-semibold border-t-2 bg-white">Stars</p>
        </div>
        <div className="h-20 w-20 border-2 border-gray-200 rounded bg-gray-100 flex flex-col">
          <p className="h-[90%] text-3xl flex items-center justify-center">100</p>
          <p className="text-center font-semibold border-t-2 bg-white">Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard