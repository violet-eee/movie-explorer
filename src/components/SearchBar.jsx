function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="🔍 Search for a movie..."
      className="w-full px-5 py-4 rounded-xl bg-gray-900 border border-gray-700 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
    />
  )
}

export default SearchBar