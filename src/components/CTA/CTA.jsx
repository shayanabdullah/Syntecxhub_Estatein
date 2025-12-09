import React from 'react'
import Container from '../container/Container'
import Button from '../common Button/Button'
import { motion } from 'motion/react'
import { fadeIn } from '@/utils/motion'
const CTA = () => {
  return (
<>
<motion.section 
   variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
className=' cta py-[100px] bg-bg-dark px-4 border-y border-bg-card overflow-hidden'>
<Container>
    <div className="main flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-center">
        <div className="right lg:w-[67%]">
            <div className="text">
                <h2 className='font-urbanist font-semibold text-white lg:text-5xl text-[28px] leading-[150%] pb-3.5 '>Start Your Real Estate Journey Today</h2>
                <p className='font-urbanist font-medium text-text-secondary lg:text-base text-sm'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
        </div>
        <div className="left lg:w-[30%] w-full text-center lg:text-end">
            <Button text={'Explore Properties'} href={'#properties'} className='bg-accent-purple! w-full! block! lg:inline! py-3!'/>
        </div>
    </div>
</Container>
</motion.section>
</>
  )
}

export default CTA