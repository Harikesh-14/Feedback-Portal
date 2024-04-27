import { useState } from "react"
import { BiPaperPlane, BiSearch, BiX } from "react-icons/bi"
import { GrLocation } from "react-icons/gr"
import { Link } from "react-router-dom"
import { companiesName, locationsName } from "../DataList/companiesAndLocationDataList"
import { useSearchContext } from "../context/searchContext"

function SearchContainer() {
  // const [searchCompany, setSearchCompany] = useState<string>("")
  // const [searchLocation, setSearchLocation] = useState<string>("")
  const { searchCriteria, setSearchCriteria } = useSearchContext();
  const [isCompanyVisible, setIsCompanyVisible] = useState<Boolean>(false)
  const [isLocationVisible, setIsLocationVisible] = useState<Boolean>(false)
  const [suggestedCompanies, setSuggestedCompanies] = useState<string[]>([])
  const [suggestedLocations, setSuggestedLocations] = useState<string[]>([])

  const handleCompaniesInputChange = (value: string) => {
    setSearchCriteria(value); // Set the search criteria in the context
    const filteredCompanies = companiesName
      .filter((company) => company.companyName.toLowerCase().includes(value.toLowerCase()))
      .map((company) => company.companyName);

    setSuggestedCompanies(filteredCompanies);
  };

  const handleLocationInputChange = (value: string) => {
    setSearchCriteria(value); // Set the search criteria in the context
    const filteredLocation = locationsName
      .filter((location) => location.locationName.toLowerCase().includes(value.toLowerCase()))
      .map(company => company.locationName);

    setSuggestedLocations(filteredLocation);
  };

  const checkCompanyField = () => {
    return searchCriteria.length === 0 ? "hidden" : "block"; // Check against searchCriteria
  };

  const checkLocationField = () => {
    return searchCriteria.length === 0 ? "hidden" : "block"; // Check against searchCriteria
  };

  return (
    <section className="w-full p-10 bg-blue-500 flex flex-col justify-center items-center">
      <div className="md:w-8/12 py-10 flex flex-wrap gap-2 md:gap-0 justify-center text-xl">
        <div className="relative flex bg-white items-center gap-2 p-2 rounded-lg md:rounded-r-none md:rounded-l-lg md:w-[50%] md:border-r shadow-md">
          <BiSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Company name or industry"
            className="w-full outline-none h-10 px-2 font-sans"
            value={searchCriteria} // Use searchCriteria
            onChange={(e) => handleCompaniesInputChange(e.target.value)}
            onFocus={() => setIsCompanyVisible(true)}
            onBlur={() => setIsCompanyVisible(false)}
          />
          <div>
            <ul
              className={`absolute z-10 ${isCompanyVisible ? "block" : "hidden"} ${checkCompanyField()} h-auto max-h-[25rem] top-3 left-0 w-full bg-white rounded-lg shadow-md mt-12 focus:block overflow-y-auto`}
            >
              {suggestedCompanies.map((cname, index) => (
                <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {cname}
                </li>
              ))}
            </ul>
          </div>
          <span>
            <BiX
              className={`absolute top-4 right-5 text-2xl ${checkCompanyField()} hover:bg-gray-200 rounded-full cursor-pointer `}
              onClick={() => setSearchCriteria("")}
            />
          </span>
        </div>
        <div className="relative flex bg-white items-center gap-2 p-2 rounded-lg md:rounded-none md:w-[30%] shadow-md">
          <GrLocation className="text-2xl" />
          <input
            type="text"
            placeholder="Location name"
            className="w-full outline-none h-10 px-2"
            value={searchCriteria}
            onChange={(e) => handleLocationInputChange(e.target.value)}
            onFocus={() => setIsLocationVisible(true)}
            onBlur={() => setIsLocationVisible(false)}
          />
          <div>
            <ul
              className={`absolute z-10 ${isLocationVisible ? "block" : "hidden"} ${checkLocationField()} h-auto max-h-[25rem] top-3 left-0 w-full bg-white rounded-lg shadow-md mt-12 focus:block overflow-y-auto`}
            >
              {suggestedLocations.map((lname, index) => (
                <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {lname}
                </li>
              ))}
            </ul>
          </div>
          <span>
            <BiX 
            className={`absolute top-4 right-5 text-2xl ${checkLocationField()} hover:bg-gray-200 rounded-full cursor-pointer `}
            onClick={() => setSearchCriteria("")}
            />
          </span>
        </div>
        <Link
          to=""
          className="group flex items-center justify-center gap-1 bg-orange-600 rounded-lg md:rounded-l-none md:rounded-r-lg text-white w-[10rem] h-12 mt-6 md:mt-0 md:h-14 md:w-[20%] px-4 hover:bg-orange-700 transition ease-linear shadow-md hover:shadow-lg"
        >
          Find
          <BiPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 h-12 text-lg">
        <div className="flex">
          <select className="rounded cursor-pointer outline-none text-center bg-gray-300">
            <option value="reviews">Reviews</option>
            <option value="mostReviews">Most reviews</option>
            <option value="leastReviews">Least reviews</option>
          </select>
        </div>

        <div className="flex">
          <select className="rounded cursor-pointer outline-none text-center bg-gray-300">
            <option value="rating">Rating</option>
            <option value="mostRating">Highest rating</option>
            <option value="leastRating">Lowest rating</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default SearchContainer