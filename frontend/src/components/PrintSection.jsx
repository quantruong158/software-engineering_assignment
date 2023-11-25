import { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ListBox from './ListBox'
import { Link } from 'react-router-dom'
import OptionsGroup from './OptionsGroup'
import CheckBox from './CheckBox'
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import ConfigRow from './ConfigRow'
import BalanceBar from './BalanceBar'

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

const copies = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

const PrintSection = ({
  balance,
  setBalance,
  currentUser,
  file,
  setSelectedFile,
}) => {
  const navigate = useNavigate()
  const [isCalculating, setIsCalculating] = useState(true)
  const [isPrinting, setIsPrinting] = useState(true)
  const [printers, setPrinters] = useState([])
  const [selectedPrinter, setSelectedPrinter] = useState({
    id: 'none',
    name: 'Select Printer',
    status: 'Unavailable',
    brand: 'N/A',
    model: 'N/A',
    duplex: false,
    location: 'Unknown',
  })
  const [selectedPageOption, setSelectedPageOption] = useState(pageOptions[0])
  const [selectedPageOrientation, setSelectedPageOrientation] = useState(
    pageOrientation[0],
  )
  const [selectedSize, setSelectedSize] = useState(pageSizes[0])
  const [numCopies, setNumCopies] = useState(copies[0])
  const [collate, setCollate] = useState(false)
  const [duplex, setDuplex] = useState(true)
  const [printAmount, setPrintAmount] = useState(0)
  const handleCancel = () => {
    setSelectedFile(null)
    navigate('/home')
  }
  const handleCalculatePage = async () => {
    if (selectedPrinter.id === 'none') {
      openModal()
    } else {
      openModal()
      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('config', 'mock config')
        const res = await fetch('http://localhost:3500/print/page', {
          method: 'POST',
          body: formData,
        })
        if (!res.ok) {
          throw new Error('Error calculating page')
        }
        const { amount } = await res.json()
        setPrintAmount(amount)
        setTimeout(() => {
          setIsCalculating(false)
        }, 1000)
      } catch (err) {
        console.error(err)
      }
    }
  }
  const handlePrint = async () => {
    setIsCalculating(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('studentId', currentUser.id)
      formData.append('printerId', selectedPrinter.id)
      formData.append('amount', printAmount)
      const res = await fetch('http://localhost:3500/print/', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) {
        throw new Error('Error calculating page')
      }
      setTimeout(() => {
        closeModal()
        setIsPrinting(false)
      }, 1000)
    } catch (err) {
      console.error(err)
    }
  }

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    const getPrinters = async () => {
      try {
        const res = await fetch('http://localhost:3500/printers')
        if (!res.ok) {
          throw new Error('Error fetching printers')
        }
        const fetchedPrinters = await res.json()
        const data = fetchedPrinters.map((printer) => {
          return {
            id: printer._id,
            name: `${printer.brandName} - ${printer.printerModel} - ${printer.location}`,
            status: printer.status ? 'Available' : 'Unavailable',
            brand: printer.brandName,
            model: printer.printerModel,
            duplex: printer.duplex,
            location: printer.location,
          }
        })
        setPrinters(data)
      } catch (err) {
        console.error(err)
      }
    }
    getPrinters()
  }, [])

  return (
    <main
      className={`mt-20  ${
        isPrinting ? 'items-center' : ''
      } flex justify-center font-inter text-white md:h-[88vh]`}
    >
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
            {isPrinting ? (
              <>
                <BalanceBar
                  balance={balance}
                  setBalance={setBalance}
                  currentUser={currentUser}
                />
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
                        Brand:{' '}
                        <span className='font-bold'>
                          {selectedPrinter.brand}
                        </span>
                      </p>
                      <p>
                        Model:{' '}
                        <span className='font-bold'>
                          {selectedPrinter.model}
                        </span>
                      </p>
                      <p>
                        Status:{' '}
                        <span className='font-bold'>
                          {selectedPrinter.status}
                        </span>
                      </p>
                    </div>
                    <div className='flex flex-col gap-1 md:w-1/2 md:gap-2'>
                      <p>
                        Duplex Printing:{' '}
                        <span className='font-bold'>
                          {selectedPrinter.duplex
                            ? 'Supported'
                            : 'Not Supported'}
                        </span>
                      </p>
                      <p>
                        Location:{' '}
                        <span className='font-bold'>
                          {selectedPrinter.location}
                        </span>
                      </p>
                      <p>
                        <span className='underline underline-offset-2'>
                          Note:
                        </span>
                        <span className='font-bold'>
                          {' '}
                          If Duplex is not supported, you might need more pages
                          to print your document.
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

                    <div className='flex w-full flex-col justify-between gap-3 rounded-lg bg-white px-2 py-4 text-sm sm:w-1/3'>
                      <div className='flex items-center justify-between gap-2'>
                        <p className='font-semibold'>Copies: </p>
                        <div className='z-10 w-2/5 text-black sm:w-1/2'>
                          <ListBox
                            selected={numCopies}
                            setSelected={setNumCopies}
                            list={copies}
                          />
                        </div>
                      </div>
                      <hr />
                      <CheckBox
                        inputId='collate'
                        label='Collate'
                        handleChange={setCollate}
                      />
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
                    <button
                      className='w-full rounded-lg bg-primary-blue px-4 py-3 font-semibold text-white hover:bg-primary-blue/90 sm:w-[110px] '
                      onClick={handleCalculatePage}
                    >
                      Print
                    </button>
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        open={isOpen}
                        as='div'
                        className='relative z-[9999]'
                        onClose={closeModal}
                        unmount={true}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter='ease-out duration-300'
                          enterFrom='opacity-0'
                          enterTo='opacity-100'
                          leave='ease-in duration-200'
                          leaveFrom='opacity-100'
                          leaveTo='opacity-0'
                        >
                          <div className='fixed inset-0 bg-black/25' />
                        </Transition.Child>

                        <div className='fixed inset-0 overflow-y-auto'>
                          <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <div className='relative flex w-full flex-col justify-center gap-7 rounded-xl bg-white px-4 py-5 shadow-xl md:h-[85vh] md:w-[50%] md:min-w-[768px]'>
                              {/* if not select printer */}
                              {selectedPrinter.id === 'none' ? (
                                <>
                                  <Dialog.Title
                                    as='h3'
                                    className='text-3xl font-medium leading-6 text-primary-blue'
                                  >
                                    Please select a printer
                                  </Dialog.Title>
                                  <button
                                    type='button'
                                    className='absolute bottom-5 right-5 w-[100px] rounded-md bg-primary-blue py-2 text-lg text-white hover:bg-primary-blue/90'
                                    onClick={closeModal}
                                  >
                                    Close
                                  </button>
                                </>
                              ) : (
                                <>
                                  {isCalculating ? (
                                    <Dialog.Title
                                      as='h3'
                                      className='text-3xl font-medium leading-6 text-primary-blue'
                                    >
                                      Processing...
                                    </Dialog.Title>
                                  ) : (
                                    <>
                                      <Dialog.Title
                                        as='h3'
                                        className='text-3xl font-bold leading-6 text-primary-blue'
                                      >
                                        Printing Confirmation
                                      </Dialog.Title>
                                      <div className='flex grow flex-col justify-between rounded-md bg-primary-blue px-5 py-5 text-start text-white md:mx-16'>
                                        <div className='flex flex-col gap-2'>
                                          <ConfigRow
                                            name='Printer'
                                            value={selectedPrinter.name}
                                          />
                                          <ConfigRow
                                            name='File Name'
                                            value={file.name}
                                          />
                                          <ConfigRow
                                            name='Page Option'
                                            value={selectedPageOption.name}
                                          />
                                          <ConfigRow
                                            name='Page Orientation'
                                            value={selectedPageOrientation.name}
                                          />
                                          <ConfigRow
                                            name='Number of Copies'
                                            value={numCopies.name}
                                          />
                                          <ConfigRow
                                            name='Collate'
                                            value={collate ? 'Yes' : 'No'}
                                          />
                                          <ConfigRow
                                            name='Duplex'
                                            value={duplex ? 'Yes' : 'No'}
                                          />
                                          <ConfigRow
                                            name='Page Size'
                                            value={selectedSize.name}
                                          />
                                          <hr />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                          <div className='flex flex-col justify-between gap-2 sm:flex-row'>
                                            <ConfigRow
                                              name='Current Balance'
                                              value={balance}
                                            />
                                            <ConfigRow
                                              name='Required Pages'
                                              value={printAmount}
                                            />
                                            <ConfigRow
                                              name='Final Balance'
                                              value={balance - printAmount}
                                            />
                                          </div>
                                          <div className='flex flex-col justify-between gap-3 sm:flex-row'>
                                            <button
                                              type='button'
                                              className='rounded-md py-2 text-lg font-semibold text-white outline outline-2 outline-secondary-blue hover:bg-secondary-blue hover:outline-none md:w-[100px]'
                                              onClick={() => {
                                                setIsCalculating(true)
                                                closeModal()
                                              }}
                                            >
                                              Cancel
                                            </button>
                                            <button
                                              type='button'
                                              className='rounded-md bg-white px-3 py-2 text-lg font-semibold text-primary-blue hover:bg-white/90'
                                              onClick={handlePrint}
                                            >
                                              Confirm & Print
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </Dialog>
                    </Transition>
                    <button
                      className='w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-900 sm:w-[110px]'
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className='text-center text-4xl font-bold text-primary-blue'>
                  Print Success!!!
                </h1>
                <p className='text-center text-secondary-blue'>
                  Thank you for using our service!
                </p>
                <div className='flex items-center justify-center gap-5'>
                  <button
                    className='w-[120px] rounded-lg bg-primary-blue px-4 py-3 font-semibold text-white hover:bg-primary-blue/90'
                    onClick={() => {
                      setSelectedFile(null)
                      navigate('/history')
                    }}
                  >
                    See Logs
                  </button>
                  <button
                    className='w-[120px] rounded-lg bg-primary-blue px-4 py-3 font-semibold text-white hover:bg-primary-blue/90'
                    onClick={() => {
                      setSelectedFile(null)
                      navigate('/home')
                    }}
                  >
                    Home
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </main>
  )
}

export default PrintSection
