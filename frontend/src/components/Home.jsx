import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <main className='mt-20 flex justify-center font-inter text-white md:h-[85vh]'>
      <div className='mx-4 flex w-full flex-col gap-4 md:w-[50%] md:min-w-[768px]'>
        <div className='relative flex h-20 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary-blue shadow-xl px-3'>
          <p className='text-xl font-bold'>
            You have <span className='text-primary-blue'>100</span> page(s) left
          </p>
          <button className='right-10 rounded-md bg-white px-3 py-2 font-bold text-primary-blue md:absolute'>
            BUY MORE
          </button>
        </div>
        <div className='flex h-full flex-col gap-4 md:flex-row'>
          <div className='flex h-full flex-col items-center justify-center gap-8 rounded-xl bg-primary-blue p-14 shadow-xl md:w-[50%]'>
            <img src='src/assets/print.svg' alt='' />
            <p className='text-xl text-center'>Upload and Print</p>
            <button className='w-full rounded-md py-2 text-xl outline outline-secondary-blue hover:bg-secondary-blue hover:outline-none' onClick={() => navigate('/upload')}>
              Print Documents
            </button>
          </div>
          <div className='flex h-full flex-col items-center justify-center gap-8 rounded-xl bg-primary-blue p-14 shadow-xl md:w-[50%]'>
            <img src='src/assets/log.svg' alt='' />
            <p className='text-xl text-center'>View your printing history</p>
            <button className='w-full rounded-md py-2 text-xl outline outline-secondary-blue hover:bg-secondary-blue hover:outline-none'>
              View Logs
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
