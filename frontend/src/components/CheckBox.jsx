const CheckBox = ({ inputId, label, checked, handleChange }) => {
  return (
    <div className='flex items-center justify-between'>
      <label htmlFor={`${inputId}`} className='font-semibold'>
        {label}
      </label>
      <input
        className='h-5 w-5 accent-primary-blue'
        id={`${inputId}`}
        type='checkbox'
        defaultChecked={checked}
        onChange={() => handleChange((prev) => !prev)}
      />
    </div>
  )
}

export default CheckBox
