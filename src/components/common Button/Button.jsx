import React from 'react'

const Button = ({href, className ,text, Onclick }) => {
  return (
   <a href={href} className={`py-2 lg:py-4 px-4 lg:px-6 rounded-[10px] border border-bg-card font-urbanist font-medium text-base lg:text-lg text-white cursor-pointer flex justify-center items-center ${className}`} onClick={Onclick}>{text}</a>
  )
}

export default Button