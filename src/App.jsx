import React from 'react'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import MoviePage from './components/MoviePage'
const App = () => {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/:id' element={<MoviePage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App