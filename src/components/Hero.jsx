import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
        DISCOVER MOVIES
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-300">
        Explore and discover your favorite movies from around the world.
      </p>
      <Link
        to="/movies"
        className="mt-8 bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg text-lg font-semibold"
      >
        Explore Now
      </Link>
    </section>
  )
}

export default Hero