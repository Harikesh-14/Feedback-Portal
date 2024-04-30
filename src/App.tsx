import './App.css'

import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'

import Home from './pages/Home'
import Reviews from './pages/Reviews'
import Login from './pages/Login'
import Register from './pages/Register'
import MyReviews from './pages/MyReviews'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='my-reviews' element={<MyReviews />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
