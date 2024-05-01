import React from 'react'

const Background = () => {
  return (
    <div className='fixed w-full h-screen z-[2]'>
       <div className=' py-4 text-zinc-600 flex justify-center font-semibold text-xl'>Document</div>
        <h1 className='text-[12vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900'>Doc.</h1>
    </div>
  )
}

export default Background