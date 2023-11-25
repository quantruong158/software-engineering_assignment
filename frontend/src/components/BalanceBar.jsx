import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

const BalanceBar = ({ balance, setBalance, currentUser }) => {
  useEffect(() => {
    const getBalance = async () => {
      try {
        const res = await fetch(
          `http://localhost:3500/students/${currentUser.id}/balance`,
        )
        if (!res.ok) {
          throw Error('Error fetching balance')
        }
        const data = await res.json()
        setBalance(data.balance)
      } catch (err) {
        console.error(err)
      }
    }
    getBalance()
  }, [])
  return (
    <div className='relative flex h-20 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary-blue px-3 shadow-xl'>
      <p className='text-xl font-bold'>
        You have <span className='text-primary-blue'>{balance}</span> page(s)
        left
      </p>
      <button className='right-10 flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 font-bold text-primary-blue md:absolute'>
        BUY MORE
        <ShoppingCartIcon height={20} width={20} className='shrink-0' />
      </button>
    </div>
  )
}

export default BalanceBar
