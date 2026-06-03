import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Clouds from './pages/Clouds'
import Learn from './pages/Learn'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clouds" element={<Clouds />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  )
}
