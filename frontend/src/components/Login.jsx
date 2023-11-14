import React from 'react'

const Login = () => {
  return (
    <main className='absolute inset-0 flex'>
        <section className='w-[40%] h-full flex flex-col gap-8 justify-center items-center px-5'>
            <div className='text-5xl font-bold'>
                Logo
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-2xl font-bold'>Welcome to</p>
                <div className='font-bold text-2xl'>
                    <span className='text-primary-blue'>HCMUT</span>
                    {' '}
                    <span className='text-secondary-blue'>Smart Printing Service</span>
                </div>
            </div>
                <button className='bg-primary-blue text-white p-3 w-full rounded-full'>Login with HCMUT</button>
        </section>
        <section className='bg-primary-blue h-full w-[60%] p-10'>
            <div className='flex flex-col text-white gap-5'>
                <h1 className='font-bold text-4xl'>HCMUT <br />
                    Student Smart Printing Service
                </h1>
                <p>A convenient & cost-effective printing service <br />
                for students of Ho Chi Minh City University of Technology</p>
                <a href="https://hcmut.edu.vn" className='underline underline-offset-2'>Visit our University website</a>
            </div>
        </section>
    </main>
  )
}

export default Login