// import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import SearchContainer from "../container/SearchContainer";
import ViewPartialFeedback from "../container/ViewPartialFeedback";
import type { FeedbackT } from "../types";
import ViewFullFeedback from "../container/ViewFullFeedback";
import { useSearchContext } from "../context/searchContext";

export default function Reviews() {
  const [feedbackData, setFeedbackData] = useState<FeedbackT>([])
  const { searchCriteria } = useSearchContext()

  useEffect(() => {
    fetch("http://localhost:3000/feedback/all", {
      credentials: "include"
    }).then(response => {
      response.json().then(feedbackInfo => {
        console.log(feedbackInfo)
        setFeedbackData(feedbackInfo)
      })
    })
  }, [])

  const filteredFeedbackData = feedbackData.filter((feedback) =>
    feedback.companyName.toLowerCase().includes(searchCriteria.toLowerCase())
  );

  return (
    <div>
      <SearchContainer />
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
            createdAt={feedback.createdAt}
          />
          </React.Fragment>
        ))}
      </div>
      <ViewFullFeedback />
    </div>
  )
}