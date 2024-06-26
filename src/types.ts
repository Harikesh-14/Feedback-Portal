export type HeaderT = {
  Home: string
  Reviews: string
  MyReviews: string
  About: string
  Contact: string
}

export type AuthorT = {
  firstName: string
  lastName: string
  email: string
}

export type FeedbackDataT = {
  companyName: string
  feedback: string
  headquarter: string
  industry: string
  location: string
  rating: number
  createdAt: string
  author: AuthorT
}

export type FeedbackT = FeedbackDataT[]