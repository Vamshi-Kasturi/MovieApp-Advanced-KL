import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import MovieDetails from './pages/MovieDetails/MovieDetails'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route exact path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
