
const Home = () => {
  return (
    <main className='mt-20 flex justify-center text-white'>
        <div className='w-[50%] flex flex-col h-screen gap-4'>
            <div className='h-16 bg-secondary-blue w-full rounded-xl flex justify-center items-center relative'>
                <p className='text-xl font-bold'>You have <span className='text-primary-blue'>100</span> page(s) left</p>
                <button className='py-2 px-3 right-10 bg-white absolute text-primary-blue font-bold rounded-md'>BUY MORE</button>
            </div>
            <div className='flex flex-col md:flex-row h-full gap-4'>
                <div className='h-[85%] bg-primary-blue md:w-[50%] rounded-xl flex flex-col gap-8 justify-center items-center p-14'>
                    <div>LOGO</div>
                    <p className='text-xl'>Upload and Print</p>
                    <button className='py-2 w-full outline outline-secondary-blue rounded-md hover:bg-secondary-blue hover:outline-none text-xl'>Print Documents</button>
                </div>
                <div className='h-[85%] bg-primary-blue md:w-[50%] rounded-xl flex flex-col gap-8 justify-center items-center p-14'>
                    <div>LOGO</div>
                    <p className='text-xl'>View your printing history</p>
                    <button className='py-2 w-full outline outline-secondary-blue rounded-md hover:bg-secondary-blue hover:outline-none text-xl'>View Logs</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home