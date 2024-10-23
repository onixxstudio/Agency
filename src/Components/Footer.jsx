import React from 'react'
import "../App.css"
const Footer = () => {
  return (
      <>
      <div className='overflow-hidden bg-[#1E1E1C] flex text-white h-[78vh] text-center w-[99.999%]'>
        <hr className=' absolute flex align-middle left-[6%] h-[0.3%] rounded-md mt-[19%] hover:bg-[#A78BFA] bg-white w-[90%]'/>
    <div className='footer-h1 align-middle justify-center text-[22vw] w-[99%] font-extrabold'>
    <h1 className='onixxtext hover:text-[#A78BFA]'>ONIXX</h1>
    </div>
<div className='followus'>
  <h1 className='hover:text-[#A78BFA]'>Follow Us</h1>
<div className='flex gap-4'>
  <div className='h-12 bg-zinc-300 w-12 hover:bg-[#A78BFA]'></div>
<div className='h-12 bg-zinc-300 w-12   hover:bg-[#A78BFA]'></div>
<div className='h-12 bg-zinc-300 w-12 hover:bg-[#A78BFA]'></div>
</div>
</div>
      </div>
          </>
  )
}

export default Footer
