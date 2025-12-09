import React, { useState } from "react";
import Container from "../container/Container";
import logo from "@/assets/images/logo.svg";
import { motion } from "motion/react";
import { fadeIn } from "@/utils/motion";
import Button from "../common Button/Button";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navlinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "About us",
    href: "#about",
  },
  {
    id: 3,
    link: "Properties",
    href: "#properties",
  },
  {
    id: 4,
    link: "Services",
    href: "#services",
  },
];

const Navber = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#");
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }
  return (
    <>
      <motion.header
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="py-4  border-b border-bg-card"
      >
        <p className="font-urbanist font-medium text-xs md:text-lg leading-10 text-white text-center">
          ✨Discover Your Dream Property with Estatein{" "}
          <span className="pl-2 cursor-pointer underline">Learn More</span>
        </p>
      </motion.header>

      <motion.section
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="py-5 bg-bg-main hidden lg:block sticky top-0 z-99"
      >
        <Container>
          <nav className="flex justify-between items-center px-3">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <div className="nav-items flex items-center gap-14">
              {navlinks.map((link) => (
                <a
                  href={link.href}
                  key={link.id}
                  className={`nav-link ${
                    active == link.href ? "bg-bg-dark border-white!" : ""
                  }`}
                  onClick={() => setActive(link.href)}
                >
                  {link.link}
                </a>
              ))}
            </div>
            <Button text='Contact us' className={'bg-bg-dark!'} href={'#contact'}/>
          </nav>
        </Container>
      </motion.section>

{/* mobile navber */}
<div className="lg:hidden sticky top-0 z-50">
  <nav className="relative">
  <div className="nav-main flex items-center justify-between border-b border-border 
  px-3 py-5 bg-bg-main text-4xl text-white z-103">
     
    <div className="logo">
      <img src={logo} alt="" />
    </div>

    <div className="menu-btn cursor-pointer" onClick={()=> setIsMenuOpen(!isMenuOpen)}>
      <HiOutlineMenuAlt3/>
    </div>


  </div>
  <div className={`navber max-w-[350px] w-full h-screen absolute -z-99 left-0 top-0 bg-bg-dark border-white/50 border-r transition-all duration-300 ease-in-out ${isMenuOpen == true ? "translate-x-0" : " -translate-x-full"}`}>
    <div className="nav-items flex flex-col items-center gap-6 justify-center h-full w-full relative">
              {navlinks.map((link) => (
                <a
                  href={link.href}
                  key={link.id}
                  className={`nav-link ${
                    active == link.href ? "bg-bg-dark border-white!" : ""
                  }`}
                  onClick={() => {
                    handleMenuClose()
                    setActive(link.href)
                    
                  }}
                >
                  {link.link}
                </a>
              ))}
               <Button text='Contact us' href={'#contact'} Onclick={handleMenuClose}/>
               <i className="text-white text-2xl absolute top-[14%] right-5 cursor-pointer" onClick={handleMenuClose} ><HiX/></i>
            </div>
           
  </div>
</nav>
<div className={`overlay absolute inset-0 w-full h-screen bg-bg-card/80 backdrop-blur-md top-0 left-0 -z-100 cursor-pointer ${isMenuOpen == true ? "block" : " hidden"}`} onClick={handleMenuClose}></div>
</div>
    </>
  );
};

export default Navber;
