import { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { companiesData } from "../DataList/companiesDataList";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import FeedbackCard from "./FeedbackCard";
import { useFeedback } from "../context/feedbackContext";
import { useSearchContext } from "../context/searchContext";

interface FeedbackInfo {
  _id: string;
  location: string;
  averageRating: number;
}

function CardsSection() {
  const [visibleCompanies, setVisibleCompanies] = useState(companiesData.slice(0, 5));
  const [feedbackData, setFeedbackData] = useState<FeedbackInfo[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const { isFeedbackVisible } = useFeedback();
  const { searchCriteria } = useSearchContext();

  useEffect(() => {
    const filteredCompanies = companiesData.filter(company =>
      company.locations.some(location =>
        location.toLowerCase().includes(searchCriteria.toLowerCase())
      ) || company.companyName.toLowerCase().includes(searchCriteria.toLowerCase())
    );
    setVisibleCompanies(filteredCompanies.slice(0, 5));
    setHasMore(filteredCompanies.length > visibleCompanies.length);
  }, [searchCriteria]);

  useEffect(() => {
    fetch('http://localhost:3000/feedback/average-rating', {
      credentials: 'include'
    }).then(response => {
      response.json().then((feedbackInfo: FeedbackInfo[]) => {
        setFeedbackData(feedbackInfo);
      });
    });
  }, []);

  const findAverageRating = (companyName: string, location: string) => {
    const feedbackItem = feedbackData.find(item => item._id === companyName && item.location === location);
    return feedbackItem ? feedbackItem.averageRating : 0;
  };

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
    <>
      <InfiniteScroll
        className="w-full flex flex-wrap justify-center items-center gap-4 p-4"
        dataLength={visibleCompanies.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p className="w-full text-center text-2xl pb-4 font-semibold">No more companies to load</p>
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
              searchCriteria={searchCriteria}
              feedbackData={{
                averageRating: findAverageRating(company.companyName, location),
                totalReviews: 5
              }}
            />
          ))
        ))}

        {isFeedbackVisible && <FeedbackCard />}
      </InfiniteScroll>
    </>
  );
}

export default CardsSection;
