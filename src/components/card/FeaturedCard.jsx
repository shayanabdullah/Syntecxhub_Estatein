import React, { useState } from 'react'
import card1 from '@/assets/images/featuredCard-2.svg'
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import Button from '../common Button/Button';
import { motion } from 'motion/react';

const FeaturedCard = ({src, title, halfdes, fulldes, icon, price,bedroom, bathroom, variant}) => {
    const [readmore, setReadMore] = useState(false)
    
  return (
   <>
   <motion.div
   variants={variant}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: true }}
   className="card p-6 md:p-10 bg-bg-dark border border-bg-card rounded-xl cursor-pointer">
    <div className="img md:max-h-[258px] max-h-[400px] overflow-hidden rounded-xl">
        <img src={src} alt="" className='w-full'  />
    </div>
   <div className="text pt-8 pb-8">
  <h2 className='font-urbanist font-semibold text-2xl text-white pb-2'>
    {title}
  </h2>

  <p className='font-urbanist font-medium text-lg text-text-secondary'>
    {halfdes}
    {readmore && fulldes}

    <span
      className='text-white cursor-pointer '
      onClick={() => setReadMore(!readmore)}
    >
      {readmore ? ' Read Less' : ' Read More'}
    </span>
  </p>
</div>
    <div className="flex items-center flex-wrap gap-2.5 gap-y-3 pb-12">
        <div className="bg-bg-main border-main rounded-[28px] flex items-center gap-1 text-white py-2 px-3">
            <i>{icon}</i>
            <p className='font-urbanist font-medium text-lg text-white'>{bedroom}</p>
        </div>
        <div className="bg-bg-main border-main rounded-[28px] flex items-center gap-1 text-white py-2 px-3">
            <i>{icon}</i>
            <p className='font-urbanist font-medium text-lg text-white'>{bathroom}</p>
        </div>
        <div className="bg-bg-main border-main rounded-[28px] flex items-center gap-1 text-white py-2 px-3">
            <i><HiBuildingOffice /></i>
            <p className='font-urbanist font-medium text-lg text-white'>Villa</p>
        </div>
    </div>

    <div className="flex items-center gap-5 md:gap-12">
      <div className="">
          <p className='font-urbanist font-medium text-lg text-text-secondary'>Price</p>
        <h3 className='font-urbanist font-semibold  text-lg md:text-2xl text-white'>{price}</h3>
      </div>
        <Button text={'View Property Details'} className={'bg-accent-purple! w-full! text-center px-3! text-sm!'}/>
    </div>
   </motion.div>
   </>
  )
}

export default FeaturedCard