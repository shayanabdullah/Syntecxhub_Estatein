import React from 'react'

const Card = ({title, description}) => {
  return (
  <div className="card p-4 md:pl-6 xl:pr-17 xl:py-4 bg-bg-main border border-bg-card rounded-xl ">
                        <div className="text text-center xl:text-left">
                            <h2 className=" text-2xl md:text-[40px] font-urbanist font-bold text-white">{title}</h2>
                            <p className="md:text-[18px] text-xs pt-2 font-urbanist font-medium text-text-secondary">{description}</p>
                        </div>
                </div>
  )
}

export default Card