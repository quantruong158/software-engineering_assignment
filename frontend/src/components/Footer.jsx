const Footer = () => {
  return (
    <footer className='mt-4 min-h-[20rem] bg-gradient-to-br from-primary-blue to-secondary-blue-200 px-10 py-6 text-white lg:px-40'>
      <div className='flex flex-col gap-5 sm:flex-row'>
        <div className='flex flex-col gap-2 sm:w-1/3 sm:gap-5'>
          <h2 className='text-lg font-semibold'>HCMUT SPSS</h2>
          <div className='text-5xl bg-white w-fit px-3 py-1 shrink-0'>
            <img src='src/assets/ssps_logo.svg' alt='' width={276} />
          </div>
        </div>
        <div className='flex flex-col gap-2 sm:w-1/3 sm:gap-5'>
          <h2 className='text-lg font-semibold'>WEBSITES</h2>
          <div className='flex flex-col gap-2 text-sm'>
            <a href='https://hcmut.edu.vn'>HCMUT</a>
            <a href='https://hcmut.edu.vn'>MyBK</a>
            <a href='https://hcmut.edu.vn'>BKSI</a>
          </div>
        </div>
        <div className='flex flex-col gap-2 sm:w-1/3 sm:gap-5'>
          <h2 className='text-lg font-semibold'>CONTACT</h2>
          <div className='flex flex-col gap-2 text-sm'>
            <p>268 Ly Thuong Kiet Street, Ward 14, District 10, HCM City</p>
            <p>(028) 38 651 670 - (028) 38 647 256</p>
            <p>dontsendtothisemail@hcmut.edu.vn</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
