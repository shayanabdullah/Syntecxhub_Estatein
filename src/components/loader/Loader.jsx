import React from "react";
import loader from '@/assets/images/loader.gif'
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-bg-card flex items-center justify-center z-[9999]">
 <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
