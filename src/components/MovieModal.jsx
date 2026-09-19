function MovieModal({ movie, onClose }) {
  const image =
    movie.image?.original ||
    movie.image?.medium ||
    'https://placehold.co/600x400?text=No+Image'
  const rating = movie.rating?.average ?? 'N/A'
  const release = movie.premiered || 'N/A'
  const genres = movie.genres?.length ? movie.genres.join(', ') : 'N/A'
  const network = movie.network?.name || movie.webChannel?.name || 'N/A'
  const summary = movie.summary
    ? movie.summary.replace(/<[^>]+>/g, '')
    : 'No summary available.'

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-red-500 text-white text-xl"
        >
          ✕
        </button>

        <img
          src={image}
          alt={movie.name}
          className="w-full h-72 object-cover object-top rounded-t-xl"
        />

        <div className="p-6">
          <h2 className="text-3xl font-bold">{movie.name}</h2>
          <p className="mt-2 text-gray-300">
            ⭐ Rating: {rating} &nbsp;|&nbsp; 📅 Release: {release}
          </p>

          <h3 className="mt-5 text-lg font-semibold">Overview:</h3>
          <p className="mt-1 text-gray-300 leading-relaxed">{summary}</p>

          <div className="mt-5 space-y-1 text-gray-300">
            <p><span className="font-semibold text-white">Genres:</span> {genres}</p>
            <p><span className="font-semibold text-white">Language:</span> {movie.language || 'N/A'}</p>
            <p><span className="font-semibold text-white">Status:</span> {movie.status || 'N/A'}</p>
            <p><span className="font-semibold text-white">Network:</span> {network}</p>
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold"
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal