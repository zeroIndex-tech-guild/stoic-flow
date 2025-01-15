import { Link, router } from '@inertiajs/react'
import { useGetCurrentUser } from '~/hooks/auth/useGetCurrentUser'
import { firebaseAuth } from '~/lib/firebase'

export const Navbar = () => {
  const user = useGetCurrentUser()

  const handleLogout = () => {
    firebaseAuth.signOut()
    router.get('/login')
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
          {!user ? (
            <div className="space-x-4">
              <Link href="/login" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                Login
              </Link>
              <Link href="/signup" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
                Signup
              </Link>
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
