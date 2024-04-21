import React, { createContext, useContext, useState } from "react"
import { FeedbackDataT, FeedbackT } from "../types";

type ViewFeedbackT = {
  isFeedbackVisible: boolean;
  setIsFeedbackVisible: (value: boolean) => void;
  toggleVisibility: () => void;
  fullFeedback: FeedbackDataT;
  setFullFeedback: (value: FeedbackDataT) => void;
}

const ViewFeedbackContext = createContext<ViewFeedbackT | null>(null)

export const useViewFeedback = () => {
  const context = useContext(ViewFeedbackContext)

  if (!context) {
    throw new Error("useFeedback must be used within a ViewFeedbackProvider")
  }

  return context
}

function ViewFeedbackProvider({ children }: { children: React.ReactNode }) {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState<boolean>(false)
  const [fullFeedback, setFullFeedback] = useState<FeedbackDataT>({
    companyName: "",
    feedback: "",
    headquarter: "",
    industry: "",
    location: "",
    rating: 0,
    createdAt: ""
  })

  const toggleVisibility = () => {
    setIsFeedbackVisible(!isFeedbackVisible)
  }

  const value: ViewFeedbackT = {
    isFeedbackVisible,
    setIsFeedbackVisible,
    toggleVisibility,
    fullFeedback,
    setFullFeedback
  }

  return (
    <ViewFeedbackContext.Provider value={value}>
      { children }
    </ViewFeedbackContext.Provider>
  )
}

export default ViewFeedbackProvider