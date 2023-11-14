const NavBar = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 h-16 bg-primary-blue flex justify-between items-center px-3 text-white border-b-secondary-blue border-b-4 z-10'>
        <header className='flex items-center gap-2 '>
            <div className='h-10 w-10 bg-white rounded-full'></div>
            <h1 className='font-semibold'>Student Smart Printing Service</h1>
        </header>
        <ul className='flex gap-3 items-center'>
            <li><a href="">Buy Credits</a></li>
            <li><a href="">Print Docs</a></li>
            <li><a href="">View Logs</a></li>
            <li><button className='bg-secondary-blue px-5 py-2 rounded-lg'>Log out</button></li>
        </ul>
    </nav>
  )
}

export default NavBar