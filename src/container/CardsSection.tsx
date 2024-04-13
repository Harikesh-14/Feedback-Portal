import CompanyCard from "./CompanyCard"
import { companiesData } from "../DataList/companiesDataList"

function CardsSection() {
  return (
    <section className="w-11/12 mx-auto flex flex-wrap">
      {companiesData.map((data) => (
        data.locations.map((location, index) => (
          <CompanyCard 
            key={data + "-" + index}
            companyName={data.companyName}
            headquarter={data.headquarter}
            location={location}
            industry={data.industry}
          />
        ))
      ))}
      
    </section>
  )
}

export default CardsSection