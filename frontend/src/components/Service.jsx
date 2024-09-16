import React from 'react'

function Service({icon,heading,text}) {
  return (
    <div className='w-[262px] h-[200px] px-[48px] py-[32px] flex flex-col gap-[12px] border bg-gray-100 mt-8  rounded-sm'>
      <div>{icon}</div>
      <div className="w-[138px] h-[24px] font-semibold leading-4">{heading}</div>
      <div className="w-[198px] h-[24px] font-thin text-sm leading-4">{text}</div>   
    </div>
  )
}

export default Service