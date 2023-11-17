import { isValidElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UploadSection = ({ selectedFile, setSelectedFile }) => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const allowedFileExtensions = ['.doc', '.docx', '.pdf']
  const maxSize = 542880
  const validateFile = (file) => {
    if (!file) {
      return false
    }
    const fileName = file.name.toLowerCase()
    const isValidFileType = allowedFileExtensions.some((extension) =>
      fileName.endsWith(extension),
    )
    const isValidFileSize = file.size < maxSize
    return isValidFileType && isValidFileSize
  }
  const handleFileChange = (e) => {
    setErrorMessage('')
    const file = e.target.files[0]
    if (validateFile(file)) {
      setSelectedFile(file)
      return
    }
    if (!file) {
      setErrorMessage('Please select a file!')
      setSelectedFile(null)
      return
    }
    setErrorMessage(`${file.name}: File not allowed! Please try again.`)
    setSelectedFile(null)
  }
  const onDeleteFile = () => {
    setSelectedFile(null)
  }
  const handleConfirm = () => {
    if (!selectedFile) {
      setErrorMessage('Please select a file!')
      return
    }
    navigate('/print')
  }
  return (
    <main className='mt-20 flex h-[60vh] items-center justify-center px-4 sm:h-[80vh]'>
      <section className='flex h-full w-full flex-col items-center gap-5 rounded-xl bg-secondary-blue p-3 sm:p-9 md:w-[50%] md:min-w-[768px]'>
        <div className='flex h-full w-full flex-col items-center gap-2'>
          <div className='flex h-full w-full items-center justify-center'>
            <label
              htmlFor='dropzone-file'
              className='flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-blue bg-white group'
            >
              <div className='flex flex-col items-center justify-center py-5'>
                <svg
                  className='mb-4 h-20 w-20 text-primary-blue/30 group-hover:text-primary-blue'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 16'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                  />
                </svg>
                <p className='mb-2 text-center  text-2xl font-semibold text-primary-blue/30 group-hover:text-primary-blue'>
                  Click to upload
                </p>
              </div>
              <input
                id='dropzone-file'
                type='file'
                className='hidden'
                onChange={handleFileChange}
              />
            </label>
          </div>

          {errorMessage.length > 0 && (
            <div className='flex w-full items-center justify-center rounded-md bg-white px-3 py-2'>
              <p className='font-bold text-red-600'>Error! {errorMessage}</p>
            </div>
          )}
          {selectedFile && (
            <div className='relative flex w-full items-center justify-between rounded-md bg-white px-3 py-2 font-semibold'>
              <p className='text-lg'>{selectedFile.name}</p>
              <p className='text-sm text-green-500'>Uploaded successfully</p>
              <button
                className='absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold select-none'
                onClick={onDeleteFile}
              >
                X
              </button>
            </div>
          )}
        </div>

        <div className='flex w-full items-center justify-between gap-1 text-white'>
          <div>
            <h2>Note:</h2>
            <p>Allowed file types: .pdf, .docx, .doc</p>
            <p>File should not exceed 5mb</p>
          </div>
          <button className='self-end rounded-xl bg-primary-blue px-5 py-3 hover:bg-primary-blue/90' onClick={handleConfirm}>
            Confirm file
          </button>
        </div>
      </section>
    </main>
  )
}

export default UploadSection
