import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FeedbackProvider from './context/feedbackContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <FeedbackProvider>
        <App />
      </FeedbackProvider>
    </React.StrictMode>
  </BrowserRouter>
)
