import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import MovieModal from '../components/MovieModal'

function Movies() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(true)
      setError('')
      try {
        const q = query.trim()
        const url = q
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`
          : 'https://api.tvmaze.com/shows'
        const res = await fetch(url)
        if (!res.ok) throw new Error('Request failed')
        const data = await res.json()
        setMovies(q ? data.map((item) => item.show) : data)
      } catch (err) {
        setError('Could not load movies. Please try again.')
        setMovies([])
      } finally {
        setLoading(false)
      }
    }, 400)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8">
      <SearchBar query={query} setQuery={setQuery} />

      {loading && <p className="text-center text-gray-400 mt-8">Loading...</p>}
      {error && <p className="text-center text-red-400 mt-8">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No movies found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDetails={setSelectedMovie}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  )
}

export default Movies