import { useNavigate } from 'react-router-dom'
import BalanceBar from './BalanceBar'

const Home = ({ balance, setBalance, currentUser }) => {
  const navigate = useNavigate()
  return (
    <main className='mt-20 flex justify-center font-inter text-white md:h-[85vh]'>
      <div className='mx-4 flex w-full flex-col gap-4 md:w-[50%] md:min-w-[768px]'>
        <BalanceBar
          balance={balance}
          setBalance={setBalance}
          currentUser={currentUser}
        />
        <div className='flex h-full flex-col gap-4 md:flex-row'>
          <div className='flex h-full flex-col items-center justify-center gap-8 rounded-xl bg-primary-blue p-14 shadow-xl md:w-[50%]'>
            <img src='src/assets/print.svg' alt='' />
            <p className='text-center text-xl'>Upload and Print</p>
            <button
              className='w-full rounded-md py-2 text-xl outline outline-secondary-blue hover:bg-secondary-blue hover:outline-none'
              onClick={() => navigate('/upload')}
            >
              Print Documents
            </button>
          </div>
          <div className='flex h-full flex-col items-center justify-center gap-8 rounded-xl bg-primary-blue p-14 shadow-xl md:w-[50%]'>
            <img src='src/assets/log.svg' alt='' />
            <p className='text-center text-xl'>View your printing history</p>
            <button className='w-full rounded-md py-2 text-xl outline outline-secondary-blue hover:bg-secondary-blue hover:outline-none' onClick={() => navigate('/history')}>
              View Logs
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
