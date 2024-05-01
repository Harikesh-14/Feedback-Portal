import React, { useEffect, useState } from "react"
import SearchContainer from "../container/SearchContainer"
import { FeedbackT } from "../types"
import { useSearchContext } from "../context/searchContext"
import ViewPartialFeedback from "../container/ViewPartialFeedback"
import ViewFullFeedback from "../container/ViewFullFeedback"
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from "../container/Spinner"
import { format } from "date-fns"

function MyReviews() {
  const [feedbackData, setFeedbackData] = useState<FeedbackT>([])
  const [hasMore, setHasMore] = useState(true)
  const { searchCriteria } = useSearchContext()
  useEffect(() => {
    fetch("http://localhost:3000/feedback/my-feedback", {
      credentials: "include",
    }).then(response => {
      response.json().then(feedback => {
        setFeedbackData(feedback)
      })
    })
  }, [])

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextFeedback = feedbackData.slice(
        feedbackData.length,
        feedbackData.length + 5
      );
      if (nextFeedback.length === 0) {
        setHasMore(false);
      } else {
        setFeedbackData([...feedbackData, ...nextFeedback]);
      }
    }, 1500);
  };

  const filteredFeedbackData = feedbackData.filter((feedback) =>
    feedback.companyName.toLowerCase().includes(searchCriteria.toLowerCase())
  );

  console.log(setFeedbackData)

  return (
    <div>
      <SearchContainer />

      <InfiniteScroll
        className="w-full flex flex-wrap justify-center items-center gap-4"
        dataLength={filteredFeedbackData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p className="w-full text-center text-2xl pb-4 font-semibold">No more feedback to load</p>
        }
      >
        <div>
          <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4">
            {filteredFeedbackData.map((feedback, index) => (
              <React.Fragment key={index}>
                <ViewPartialFeedback
                  companyName={feedback.companyName}
                  feedback={feedback.feedback}
                  headquarter={feedback.headquarter}
                  industry={feedback.industry}
                  location={feedback.location}
                  rating={feedback.rating}
                  createdAt={format(feedback.createdAt, "dd/MM/yyyy")}
                  author={feedback.author}
                />
              </React.Fragment>
            ))}
          </div>
          <ViewFullFeedback />
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default MyReviews