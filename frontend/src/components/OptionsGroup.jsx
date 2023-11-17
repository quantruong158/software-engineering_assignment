import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const CheckIcon = (props) => {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const OptionsGroup = ({ options, selected, setSelected }) => {
  return (
    <div className='w-full'>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
        <div className='space-y-2'>
          {options.map((plan) => (
            <RadioGroup.Option
              defaultChecked
              key={plan.name}
              value={plan}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-1 ring-white/60 ring-offset-1 ring-offset-sky-300'
                    : ''
                }
                  ${checked ? 'bg-primary-blue/90 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-2 py-2 focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className='flex w-full items-center gap-2'>
                    {checked && (
                      <div className='shrink-0 text-white'>
                        <CheckIcon className='h-6 w-6' />
                      </div>
                    )}
                    <div className='flex items-center'>
                      <div className='text-sm'>
                        <RadioGroup.Label
                          as='p'
                          className={`font-semibold  ${
                            checked ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {plan.name}
                        </RadioGroup.Label>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default OptionsGroup
