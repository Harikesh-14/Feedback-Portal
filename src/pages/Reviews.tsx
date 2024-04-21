// import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import SearchContainer from "../container/SearchContainer";
import ViewPartialFeedback from "../container/ViewPartialFeedback";
import { FeedbackT } from "../types";

export default function Reviews() {
  const [feedbackData, setFeedbackData] = useState<FeedbackT>([])

  useEffect(() => {
    fetch("http://localhost:3000/feedback/all", {
      credentials: "include"
    }).then(response => {
      response.json().then(feedbackInfo => {
        setFeedbackData(feedbackInfo)
      })
    })
  }, [])

  return (
    <div>
      <SearchContainer />
      <div className="w-full flex flex-wrap justify-center items-center gap-4 p-4">
        {feedbackData.map((feedback, index) => (
          <ViewPartialFeedback
            key={index}
            companyName={feedback.companyName}
            feedback={feedback.feedback}
            headquarter={feedback.headquarter}
            industry={feedback.industry}
            location={feedback.location}
            rating={feedback.rating}
            reviewDate={feedback.reviewDate}
          />
        ))}
      </div>
    </div>
  )
}