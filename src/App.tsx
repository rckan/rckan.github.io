import { BrowserRouter, Routes, Route } from 'react-router'
import { Navigation } from './components/Navigation'
import { Home } from './pages/Home'
import { Bio } from './pages/Bio'
import { Portfolio } from './pages/Portfolio'
import { Resume } from './pages/Resume'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

