import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FeedbackProvider from './context/feedbackContext.tsx'
import UserContextProvider from './context/userContext.tsx'
import ViewFeedbackProvider from './context/viewFeedbackContext.tsx'
import { SearchProvider } from './context/searchContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <SearchProvider>
        <UserContextProvider>
          <ViewFeedbackProvider>
            <FeedbackProvider>
              <App />
            </FeedbackProvider>
          </ViewFeedbackProvider>
        </UserContextProvider>
      </SearchProvider>
    </React.StrictMode>
  </BrowserRouter>
)
