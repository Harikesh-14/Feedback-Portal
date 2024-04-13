import CompanyCard from "./CompanyCard"
import { companiesData } from "../DataList/companiesDataList"

function CardsSection() {
  return (
    <section className="w-11/12 mx-auto flex flex-wrap">
      {companiesData.map((data) => (
        <CompanyCard key={data.id} />
      ))}
    </section>
  )
}

export default CardsSection