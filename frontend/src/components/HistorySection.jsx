import React, { useEffect, useState } from 'react'
import Log from './Log'

const HistorySection = ({ currentUser }) => {
  const [logs, setLogs] = useState([])
  useEffect(() => {
    const getLogs = async () => {
      try {
        const res = await fetch(
          `http://localhost:3500/history/${currentUser.id}`,
        )
        if (!res.ok) {
          throw Error('Error fetching logs')
        }
        const data = await res.json()
        setLogs(data)
      } catch (err) {
        console.error(err)
      }
    }
    getLogs()
  }, [])
  return (
    <main className='mt-20 flex justify-center font-inter md:min-h-[85vh]'>
      <section className='mx-3 flex w-full flex-col gap-5 md:mx-10'>
        <h1 className='text-center text-5xl font-bold text-primary-blue'>
          HISTORY
        </h1>
        <div className='flex h-full flex-col gap-4 rounded-lg bg-primary-blue p-3'>
          {logs.map((log, idx) => (
            <Log key={idx} log={log} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default HistorySection
