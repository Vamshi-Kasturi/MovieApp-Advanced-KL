
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.js'
import MovieDetails from './pages/MovieDetails/MovieDetails.js'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route  path='/' element={<Home />} /> 
        <Route  path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
