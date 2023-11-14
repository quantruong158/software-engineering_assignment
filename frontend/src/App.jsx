import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await fetch('http://localhost:3500/')
        if (!res.ok) {
          throw new Error('Error')
        }
        const data = await res.json()
        setMessage(data.message)
      } catch (err) {
        console.error(err)
      }
    }
    getMessage()
  }, [])
  return (
    <main>
      <h1 className='flex justify-center text-3xl'>
        Student Smart Printing Service
      </h1>
      <p className='text-lg'>{message}</p>
    </main>
  )
}

export default App
