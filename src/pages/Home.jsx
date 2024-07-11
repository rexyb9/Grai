import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Link
        className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        to="/code"
      >
        <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Code Only
        </span>
      </Link>
      <Link
        className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
        to="/global"
      >
        <span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

        <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
          Global
        </span>
      </Link>
    </>
  )
}

export default Home
