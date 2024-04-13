import { useState } from "react";
import CompanyCard from "./CompanyCard";
import { companiesData } from "../DataList/companiesDataList";
import InfiniteScroll from "react-infinite-scroll-component";

function CardsSection() {
  const [visibleCompanies, setVisibleCompanies] = useState(companiesData.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextCompanies = companiesData.slice(
        visibleCompanies.length,
        visibleCompanies.length + 5 
      );
      if (nextCompanies.length === 0) {
        setHasMore(false);
      } else {
        setVisibleCompanies([...visibleCompanies, ...nextCompanies]);
      }
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={visibleCompanies.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p className="text-center text-2xl pb-4 font-semibold">No more companies to load</p>
      }
    >
      {visibleCompanies.map((company) => (
        company.locations.map((location, index) => (
          <CompanyCard
            key={`${company.id}-${index}`}
            companyName={company.companyName}
            headquarter={company.headquarter}
            location={location}
            industry={company.industry}
          />
        ))
      ))}
    </InfiniteScroll>
  );
}

export default CardsSection;
