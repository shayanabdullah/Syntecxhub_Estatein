import React from "react";
import loader from '@/assets/images/loader.gif'
import { IoMdHome } from "react-icons/io";
import { FaTree } from "react-icons/fa6";
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-bg-card flex items-center justify-center z-[9999]">
 <div className="text-text-secondary  fadein flex gap-1 items-end md:text-9xl text-7xl  border-b ">
<img src={loader} alt="" />

 </div>
    </div>
  );
};

export default Loader;
