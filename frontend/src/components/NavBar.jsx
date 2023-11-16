const NavBar = () => {
  return (
    <nav className='fixed left-0 right-0 top-0 z-10 flex h-16 items-center justify-between border-b-4 border-b-secondary-blue bg-primary-blue px-3 text-white'>
      <header className='flex items-center gap-2 '>
        <div className='h-12 w-12 rounded-full bg-white shrink-0'>
          <a href=''>
            <img src='src/assets/bk_logo.svg' alt=''/>
          </a>
        </div>
        <h1 className='font-semibold text-lg'>Student Smart Printing Service</h1>
      </header>
      <ul className='flex items-center gap-3'>
        <li>
          <a href=''>Buy Credits</a>
        </li>
        <li>
          <a href=''>Print Docs</a>
        </li>
        <li>
          <a href=''>View Logs</a>
        </li>
        <li>
          <button className='rounded-lg bg-secondary-blue px-5 py-2'>
            Log out
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
