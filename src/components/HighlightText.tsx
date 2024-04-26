
import React from 'react'

function HighlightText({text}) {
  return (
    <span className='bg-gradient-to-l from-[#3494E6]  to-[#EC6EAD] text-transparent bg-clip-text font-bold text-3xl '>
        {" "}
        {text}
    </span>
  )
}

export default HighlightText


