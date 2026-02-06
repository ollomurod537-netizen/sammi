import { Link } from "react-router-dom"
import { logo } from "../constants/Index"

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[80px] h-auto rounded-full hover:scale-105 transition-transform duration-300"/>
        </Link>
        <nav className="flex items-center gap-6 text-lg font-semibold">
          <Link  to="/login" className="text-gray-700 hover:text-blue-600 transition-colors duration-300" >
            Login
          </Link>
          <Link  to="/register" className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-sm">
            Register
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
