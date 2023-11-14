const Footer = () => {
  return (
    <footer className='h-[300px] bg-primary-blue px-60 text-white py-6'>
        <div className='flex'>
            <div className='w-1/3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-lg'>HCMUT SPSS</h2>
                    <div className='text-5xl'>LOGO</div>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-lg'>WEBSITES</h2>
                    <div className='flex flex-col gap-2 text-sm'>
                        <a href="https://hcmut.edu.vn">HCMUT</a>
                        <a href="https://hcmut.edu.vn">MyBK</a>
                        <a href="https://hcmut.edu.vn">BKSI</a>
                    </div>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-lg'>CONTACT</h2>
                    <div className='flex flex-col gap-2 text-sm'>
                        <p>268 Ly Thuong Kiet Street, Ward 14, District 10, HCM City</p>
                        <p>(028) 38 651 670 - (028) 38 647 256</p>
                        <p>dontsendtothisemail@hcmut.edu.vn</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer