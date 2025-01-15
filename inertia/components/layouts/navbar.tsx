import { useState } from 'react'
import { Link } from '@inertiajs/react'

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
        <div>
          {!isLoggedIn ? (
            <div className="space-x-4">
              <button
                onClick={handleLogin}
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
              >
                Login
              </button>
              <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
                Signup
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}