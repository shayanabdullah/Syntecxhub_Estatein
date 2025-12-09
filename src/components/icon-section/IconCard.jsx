import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

const IconCard = ({src, text}) => {
  return (
    <>
      <div className="card py-5 px-4 md:py-8 bg-bg-dark rounded-[10px] border-2 border-bg-card flex flex-col justify-center items-center drop-shadow-md drop-shadow-bg-card relative hover:scale-[1.05] transition-all duration-200 ease-in-out ">
        <div className="img pb-5">
          <img src={src} alt=""className="w-full" />
        </div>
        <p className="font-urbanist font-semibold text-sm md:text-lg text-center text-white">
          {text}
        </p>
        <div className="text-border-soft md:text-[26px] text-lg absolute top-5 right-5">
          <TfiArrowTopRight />
        </div>
      </div>
    </>
  );
};

export default IconCard;
