import React from 'react'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Courses} from './pages/Courses'
import {Home } from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App