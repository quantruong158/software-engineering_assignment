const ConfigRow = ({ name, value }) => {
  return (
    <p>
      {name}: <span className='font-bold text-lg'>{value}</span>
    </p>
  )
}

export default ConfigRow
