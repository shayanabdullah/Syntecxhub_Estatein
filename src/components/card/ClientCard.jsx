import React, { useState } from 'react'
import { motion } from 'motion/react'
import client from '@/assets/images/client-3.svg'
import Button from '../common Button/Button'
import { fadeIn } from '@/utils/motion'

const ClientCard = ({src, name, details,title, location,fulldes, className, star, buttonClass}) => {
const [readmore, setReadMore] = useState(false) 
const handleMore = () => {
  setReadMore(!readmore)
}
  return (
<>
<motion.div 
variants={fadeIn("down", 0.5)}
className={`CARD p-12.5 bg-bg-dark border-main rounded-xl ${className}`}>
    <div className="icon pb-10">
        <img src={star} alt="" />
    </div>
    <h3 className='font-urbanist font-semibold text-2xl text-white pb-3.5'>
        {title} 
    </h3>
    <p className='font-urbanist font-medium text-lg text-white/80 pb-10'>
        {details}
    {readmore && fulldes}
    </p>
    <div className="client flex items-center gap-2">
        <div className="img">
            <img src={src} alt="" />
        </div>
  <div className="text flex flex-col  gap-y-1">
          <h4 className='font-urbanist font-medium text-xl text-white'>{name}</h4>
        <p className='font-urbanist font-medium text-lg text-text-secondary'>{location}</p>
  </div>

  <Button Onclick={handleMore} text={'Read More'} className={`bg-bg-main! ${buttonClass}`}/>

    </div>
</motion.div>
</>
  )
}

export default ClientCard