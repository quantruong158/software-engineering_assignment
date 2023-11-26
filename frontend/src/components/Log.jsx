import moment from 'moment'

const Log = ({ log }) => {
  return (
    <div className='flex flex-col gap-2 rounded-lg bg-white px-5 py-2 sm:grid sm:grid-cols-5 sm:gap-10'>
      <p>
        <span>Printer:</span>{' '}
        <span className='font-semibold'>
          {log.printerID.brandName} - {log.printerID.printerModel} -{' '}
          {log.printerID.location}
        </span>
      </p>
      <p className='overflow-hidden'>
        <span>File name:</span>{' '}
        <span className='font-semibold'>{log.fileID.fileName}</span>
      </p>
      <p>
        <span>Start time:</span>{' '}
        <span className='font-semibold'>
          {moment(log.startTime).format('YYYY-MM-DD HH:mm:ss')}
        </span>
      </p>
      <p>
        <span>End time:</span>{' '}
        <span className='font-semibold'>{moment(log.endTime).format('YYYY-MM-DD HH:mm:ss')}</span>
      </p>
      <p>
        <span>Number of Page:</span>{' '}
        <span className='font-semibold'>{log.numberOfPage}</span>
      </p>
    </div>
  )
}

export default Log
