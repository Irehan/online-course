import React from 'react'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Courses} from './pages/Courses'
import {Home } from './pages/Home'
import {HashRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App