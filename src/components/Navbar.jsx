import { Link } from 'react-router-dom'
import { Cloud } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-sky-900 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Cloud className="w-8 h-8" />
            <span className="gradient-text">CloudHub</span>
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="hover:text-sky-300 transition">Home</Link>
            <Link to="/clouds" className="hover:text-sky-300 transition">Clouds</Link>
            <Link to="/learn" className="hover:text-sky-300 transition">Learn</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
