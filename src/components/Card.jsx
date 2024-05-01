import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2}} dragElastic={.1} 
    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className=' flex-shrink-0 relative h-72 w-52 text-white bg-zinc-900/90  rounded-[45px] py-10 px-5 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute w-full bottom-0 left-0'>
        <div className='flex justify-between items-center px-8 mb-5'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7 flex justify-center items-center bg-zinc-600 rounded-full'>
            {data.close ? <IoClose size=".7em" className='text-white'/> :  <LuDownload size=".7em" className='text-white'/>}
           
          </span>
        </div>
        {data.tag.isOpen && (
        <div className={`tag w-full py-2 ${data.tag.isBlue? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
          <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>
        </div>) }
        

      </div>
    </motion.div>
  )
}

export default Card