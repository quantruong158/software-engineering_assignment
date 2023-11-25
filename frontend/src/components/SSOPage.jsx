import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SSOPage = ({ setCurrentUser }) => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3500/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        setErrorMessage('Unauthorized')
        throw new Error('Unauthorized')
      }
      const userId = await res.json()
      const user = {
        id: userId,
      }
      setCurrentUser(user)
      navigate('/home')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <main className='absolute inset-0 flex justify-center bg-[#eee] font-inter'>
      <section className='mx-28 flex h-fit w-full flex-col bg-white'>
        <div className='flex items-center justify-start gap-5 bg-[#210f7a] p-2'>
          <img src='src/assets/bk_logo.svg' alt='' />
          <h1 className='text-2xl font-semibold text-white'>
            Central Authentication Service
          </h1>
        </div>
        <div className='flex'>
          <form className='m-3 flex min-w-[427px] flex-col gap-3 rounded-md bg-[#eee] p-5 pr-24'>
            {errorMessage.length > 0 && (
              <div className='rounded-md bg-red-400 px-5 py-3'>
                <h2>Unauthorized</h2>
              </div>
            )}

            <h2 className='text-lg font-semibold text-red-800'>
              Enter your Username and Password
            </h2>
            <hr className='border-gray-300' />
            <div>
              <label className='text-sm font-semibold text-gray-500' htmlFor=''>
                Username
              </label>
              <br />
              <input
                className='mb-2 w-full rounded-sm bg-yellow-50 p-1 text-sm outline outline-1 outline-gray-200 focus-visible:outline-black'
                type='text'
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label className='text-sm font-semibold text-gray-500' htmlFor=''>
                Password
              </label>
              <br />
              <input
                className='mb-2 w-full rounded-sm bg-yellow-50 p-1 text-sm outline outline-1 outline-gray-200 focus-visible:outline-black'
                type='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input type='checkbox' name='' id='' />
              <label className='ml-2 text-xs text-gray-500' htmlFor=''>
                Warn me before logging me into other sites.
              </label>
            </div>
            <hr className='border-gray-300' />
            <div>
              <button
                type='button'
                onClick={(e) => handleLogin(e)}
                className='rounded-md bg-[#006dcc] px-3 py-1 text-white'
              >
                Login
              </button>
              <button className='ml-1 rounded-md bg-[#006dcc] px-3 py-1 text-white'>
                Clear
              </button>
            </div>
            <a
              className='text-xs text-blue-700 underline underline-offset-2'
              href=''
            >
              Change password?
            </a>
          </form>
          <div className='m-3 flex flex-col gap-4 py-5'>
            <div>
              <h2 className='font-semibold text-red-800'>Languages</h2>
              <a
                className='ml-3 text-xs text-blue-700 underline underline-offset-2'
                href=''
              >
                Vietnamese
              </a>
              <a
                className='ml-3 text-xs text-blue-700 underline underline-offset-2'
                href=''
              >
                English
              </a>
            </div>
            <div>
              <h2 className='font-semibold text-red-800'>Please note</h2>
              <p className='ml-3 text-xs' href=''>
                The Login page enables single sign-on to multiple websites at
                HCMUT. This means that you only have to enter your user name and
                password once for websites that subscribe to the Login page.
              </p>
              <p className='ml-3 mt-1 text-xs' href=''>
                You will need to use your HCMUT Username and password to login
                to this site. The "HCMUT" account provides access to many
                resources including the HCMUT Information System, e-mail, ...
              </p>
              <p className='ml-3 mt-1 text-xs' href=''>
                For security reasons, please Exit your web browser when you are
                done accessing services that require authentication!
              </p>
            </div>
            <div>
              <h2 className='font-semibold text-red-800'>Technical support</h2>
              <p className='ml-3 text-xs' href=''>
                E-mail:{' '}
                <span className='underline-2 text-blue-700 underline'>
                  support@hcmut.edu.vn
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SSOPage
