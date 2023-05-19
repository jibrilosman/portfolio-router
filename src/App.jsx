import React from 'react'
import './index.css'
import './darkTheme.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/Contact'
import Layout from './components/Layout'

const App = () => {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App