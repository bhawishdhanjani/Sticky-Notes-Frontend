import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);
  const data = [{
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
    fileSize: ".9mb",
    close: false,
    tag: {isOpen : true , tagTitle: "Download" , isBlue:false }
  },
  {
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
    fileSize: ".9mb",
    close: false,
    tag: {isOpen : false , tagTitle: "Download" , isBlue:true }
  },
  {
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing",
    fileSize: ".9mb",
    close: false,
    tag: {isOpen : true , tagTitle: "Download" , isBlue:true }
  }
]
  return (
    <div ref={ref} className='fixed top-0 left-0 w-full h-screen z-[3] flex flex-wrap gap-5 p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}

    </div>
  )
}

export default Foreground