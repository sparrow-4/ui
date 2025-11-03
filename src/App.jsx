import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './Pages/Home'
import SplashCursor from './components/SplashCursor'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
      <SplashCursor />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
