import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'

import Home from './pages/Home'
import Reviews from './pages/Reviews'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
