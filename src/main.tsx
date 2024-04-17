import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FeedbackProvider from './context/feedbackContext.tsx'
import UserContextProvider from './context/userContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContextProvider>
        <FeedbackProvider>
          <App />
        </FeedbackProvider>
      </UserContextProvider>
    </React.StrictMode>
  </BrowserRouter>
)
