import { useState } from 'react'
import './App.css'

import SkillsPage from './pages/SkillsPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ArticlesPage from './pages/ArticlesPage'
import Navbar from './components/Navbar'

import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/skills" element={<SkillsPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
