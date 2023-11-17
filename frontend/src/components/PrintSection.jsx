import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListBox from './ListBox'
import { Link } from 'react-router-dom'
import OptionsGroup from './OptionsGroup'
import CheckBox from './CheckBox'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'

const printers = [
  {
    name: 'Select printer',
    status: 'Unavailable',
    duplex: false,
    location: 'Unknown',
  },
  { name: 'B1-102', status: 'Available', duplex: true, location: 'B1-102' },
  { name: 'B4-604', status: 'Available', duplex: true, location: 'B4-604' },
  { name: 'A1-102', status: 'Available', duplex: true, location: 'A1-102' },
  { name: 'A4-402', status: 'Available', duplex: true, location: 'A4-402' },
  { name: 'C6-106', status: 'Available', duplex: true, location: 'C6-106' },
  { name: 'B10-101', status: 'Available', duplex: true, location: 'B10-101' },
]

const pageSizes = [
  { name: 'A4' },
  { name: 'A3' },
  { name: 'Letter' },
  { name: 'Tabloid' },
  { name: 'Legal' },
]

const pageOptions = [
  {
    name: 'All Pages',
  },
  {
    name: 'Odd Page only',
  },
  {
    name: 'Even Page only',
  },
  {
    name: 'Pages',
  },
]
const pageOrientation = [
  {
    name: 'Portrait',
  },
  {
    name: 'Landscape',
  },
]

const pages = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

const PrintSection = ({ file, setSelectedFile }) => {
  const navigate = useNavigate()
  const [selectedPrinter, setSelectedPrinter] = useState(printers[0])
  const [selectedPageOption, setSelectedPageOption] = useState(pageOptions[0])
  const [selectedPageOrientation, setSelectedPageOrientation] = useState(
    pageOrientation[0],
  )
  const [selectedSize, setSelectedSize] = useState(pageSizes[0])
  const [numPage, setNumPage] = useState(pages[0])
  const [collate, setCollate] = useState(false)
  const [duplex, setDuplex] = useState(true)
  const handleCancel = () => {
    setSelectedFile(null)
    navigate('/home')
  }
  return (
    <main className='mt-20 flex items-center justify-center font-inter text-white md:h-[88vh]'>
      {!file ? (
        <div className='flex w-full items-center justify-center gap-4 rounded-md bg-white px-3 py-2'>
          <p className='text-4xl font-bold text-red-600'>
            You haven't uploaded a file
          </p>
          <button
            className='rounded-md bg-primary-blue px-3 py-2 text-white '
            onClick={() => navigate('/upload')}
          >
            Upload now
          </button>
        </div>
      ) : (
        <>
          <div className='mx-4 flex w-full flex-col gap-4 md:w-[50%] md:min-w-[768px]'>
            <div className='relative flex h-20 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary-blue px-3 shadow-xl'>
              <p className='text-xl font-bold'>
                You have <span className='text-primary-blue'>100</span> page(s)
                left
              </p>
              <button className='right-10 flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 font-bold text-primary-blue md:absolute'>
                BUY MORE
                <ShoppingCartIcon height={20} width={20} className='shrink-0' />
              </button>
            </div>
            <div className='flex flex-col gap-3 rounded-xl bg-secondary-blue px-3 py-4 shadow-xl sm:px-12'>
              <div className='z-20 w-full text-black'>
                <ListBox
                  selected={selectedPrinter}
                  setSelected={setSelectedPrinter}
                  list={printers}
                />
              </div>

              <div className='flex flex-col justify-between gap-1 text-sm md:flex-row'>
                <div className='flex flex-col gap-1 md:w-1/2 md:gap-2'>
                  <p>
                    Status:{' '}
                    <span className='font-bold'>{selectedPrinter.status}</span>
                  </p>
                  <p>
                    Duplex Printing:{' '}
                    <span className='font-bold'>
                      {selectedPrinter.duplex ? 'Supported' : 'Not Supported'}
                    </span>
                  </p>
                </div>
                <div className='flex flex-col gap-1 md:w-1/2 md:gap-2'>
                  <p>
                    Location:{' '}
                    <span className='font-bold'>
                      {selectedPrinter.location}
                    </span>
                  </p>
                  <p>
                    <span className='underline underline-offset-2'>Note:</span>
                    <span className='font-bold'>
                      {' '}
                      If Duplex is not supported, you might need more pages to
                      print your document.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-4 rounded-xl bg-secondary-blue px-3 py-4 shadow-xl sm:px-12'>
              <div className='flex gap-3'>
                <p className='grow rounded-full bg-white px-4 py-1 font-semibold text-black'>
                  {file.name}
                </p>
                <Link
                  to='/upload'
                  className='rounded-md bg-primary-blue px-3 py-1 text-center font-semibold hover:bg-primary-blue/90'
                >
                  Choose again
                </Link>
              </div>
              <div className='flex flex-col gap-4 text-black sm:flex-row'>
                <div className='w-full rounded-lg bg-white px-2 py-3 sm:w-1/3'>
                  <OptionsGroup
                    options={pageOptions}
                    selected={selectedPageOption}
                    setSelected={setSelectedPageOption}
                  />
                </div>

                <div className='flex w-full flex-col justify-between gap-3 rounded-lg bg-white px-2 py-3 text-sm sm:w-1/3'>
                  <div className='flex items-center justify-between gap-2'>
                    <p className='font-semibold'>Copies: </p>
                    <div className='z-10 w-2/5 text-black sm:w-1/2'>
                      <ListBox
                        selected={numPage}
                        setSelected={setNumPage}
                        list={pages}
                      />
                    </div>
                  </div>
                  <hr />
                  <CheckBox inputId='collate' label='Collate' handleChange={setCollate}/>
                  <hr />
                  <CheckBox
                    inputId='duplex'
                    label='Duplex printing'
                    checked={true}
                    handleChange={setDuplex}
                  />
                </div>
                <div className='flex w-full flex-col gap-3 rounded-lg bg-white px-2 py-3 text-sm font-semibold sm:w-1/3'>
                  <div className='z-[9] flex w-full flex-col gap-1 text-black'>
                    <p className='mx-1'>Page size:</p>
                    <ListBox
                      selected={selectedSize}
                      setSelected={setSelectedSize}
                      list={pageSizes}
                    />
                  </div>
                  <OptionsGroup
                    options={pageOrientation}
                    selected={selectedPageOrientation}
                    setSelected={setSelectedPageOrientation}
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-between gap-2 sm:flex-row'>
              <button className='rounded-lg px-4 py-3 font-semibold text-primary-blue outline outline-2 outline-primary-blue hover:bg-primary-blue hover:text-white hover:outline-none'>
                Advanced Options
              </button>
              <div className='flex flex-col gap-2 sm:flex-row'>
                <button className='w-full rounded-lg bg-primary-blue px-4 py-3 font-semibold text-white hover:bg-primary-blue/90 sm:w-[110px] '>
                  Print
                </button>
                <button
                  className='w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-900 sm:w-[110px]'
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default PrintSection
