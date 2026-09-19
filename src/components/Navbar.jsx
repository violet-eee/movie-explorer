import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <Link to="/" className="text-xl sm:text-2xl font-bold text-red-500 whitespace-nowrap">
        🎬 MovieExplorer
      </Link>
      <div className="flex items-center gap-3 sm:gap-6">
        <Link to="/" className="hover:text-red-400">Home</Link>
        <Link
          to="/movies"
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold"
        >
          Movies
        </Link>
      </div>
    </nav>
  )
}

export default Navbar