import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavBar = ({ setCurrentUser }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    setCurrentUser(null)
    navigate('/login')
  }
  return (
    <nav className='fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b-4 border-b-secondary-blue bg-primary-blue px-3 text-white'>
      <header className='flex items-center gap-2 '>
        <div className='h-12 w-12 shrink-0 rounded-full bg-white'>
          <Link to='/home'>
            <img src='src/assets/bk_logo.svg' alt='' />
          </Link>
        </div>
        <h1 className='text-lg font-semibold'>
          Student Smart Printing Service
        </h1>
      </header>
      <ul className='flex items-center gap-3'>
        <li>
          <Link tp='/home'>Buy Credits</Link>
        </li>
        <li>
          <Link to='/upload'>Print Docs</Link>
        </li>
        <li>
          <Link to='/home'>View Logs</Link>
        </li>
        <li>
          <button
            className='rounded-lg bg-secondary-blue px-5 py-2'
            onClick={handleLogout}
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
