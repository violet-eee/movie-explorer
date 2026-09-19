function MovieCard({ movie, onDetails }) {
  const year = movie.premiered ? movie.premiered.slice(0, 4) : 'N/A'
  const rating = movie.rating?.average ?? 'N/A'
  const poster =
    movie.image?.medium || 'https://placehold.co/210x295?text=No+Image'

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col">
      <img
        src={poster}
        alt={movie.name}
        loading="lazy"
        className="w-full h-80 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold line-clamp-1">{movie.name}</h3>
        <p className="text-gray-400 mt-1">
          ⭐ {rating} • 📅 {year}
        </p>
        <button
          onClick={() => onDetails(movie)}
          className="mt-4 bg-red-500 hover:bg-red-600 py-2 rounded-lg font-semibold"
        >
          See Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard