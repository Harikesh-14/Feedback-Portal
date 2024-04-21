import { ReactNode, createContext, useContext, useState } from "react"

type FeedbackDataT = {
  companyName: string;
  location: string;
  headquarter: string;
  industry: string;
  isEmpty?: boolean;
}

type FeedbackContextProp = {
  isFeedbackVisible: boolean;
  setIsFeedbackVisible: (value: boolean) => void;
  toggleVisibility: () => void;
  feedbackData: FeedbackDataT;
  setFeedbackData: (value: FeedbackDataT) => void;
}

const FeedbackContext = createContext<FeedbackContextProp | null>(null)

export const useFeedback = () => {
  const context = useContext(FeedbackContext)

  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider")
  }

  return context
}

function FeedbackProvider({ children }: {children: ReactNode}) {
  const [isFeedbackVisible, setIsFeedbackVisible] = useState<boolean>(false)
  const [feedbackData, setFeedbackData] = useState<FeedbackDataT>({
    companyName: "",
    location: "",
    headquarter: "",
    industry: "",
    isEmpty: true,
  })

  const toggleVisibility = () => {
    setIsFeedbackVisible(!isFeedbackVisible)
  }

  const value: FeedbackContextProp = {
    isFeedbackVisible,
    setIsFeedbackVisible,
    toggleVisibility,
    feedbackData,
    setFeedbackData,
  }

  return (
    <FeedbackContext.Provider value={value}>
      { children }
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider