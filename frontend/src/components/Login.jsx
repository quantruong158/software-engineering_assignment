import { useNavigate } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()
  const handleLogin = () => {
    setIsLoggedIn(true)
    navigate('/home')
  }
  return (
    <main className='absolute inset-0 flex font-inter'>
      <section className='flex h-full grow md:w-[40%] flex-col items-center justify-center gap-8 px-2 md:px-5'>
      <img src='src/assets/ssps_logo.svg' alt='' width={276} />
        <div className='text-center text-2xl font-bold leading-[110%]'>
            Welcome to
            <p className='text-secondary-blue'>
              <span className='text-primary-blue'>HCMUT</span> Student Smart
              Printing Service
            </p>
          </div>
        <button className='w-full rounded-full bg-primary-blue p-4 text-xl text-white' onClick={handleLogin}>
          Login with HCMUT
        </button>
      </section>
      <section className='hidden md:block h-full w-[60%] bg-gradient-to-br from-primary-blue to-secondary-blue-100 p-10 relative'>
        <div className='flex flex-col gap-4 text-white'>
          <h1 className='text-4xl font-semibold'>
            HCMUT <br />
            Student Smart Printing Service
          </h1>
          <p>
            A convenient & cost-effective printing service <br />
            for students of Ho Chi Minh City University of Technology
          </p>
          <a
            href='https://hcmut.edu.vn'
            className='underline underline-offset-2 font-semibold'
          >
            Visit our University website
          </a>
        </div>
        <div className='absolute right-0 bottom-20 bg-white pr-4 py-4 pl-16'>
        <img src='src/assets/ssps_logo.svg' alt='' width={276} />
        </div>
      </section>
    </main>
  )
}

export default Login
