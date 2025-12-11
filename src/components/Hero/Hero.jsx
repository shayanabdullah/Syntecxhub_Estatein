import React from "react";
import Container from "../container/Container";
import banner from "@/assets/images/banner.svg";
import Button from "../common Button/Button";
import spinner from "@/assets/images/spinner.svg";
import Card from "../card/Card";
import IconCard from "../icon-section/IconCard";
import icon1 from "@/assets/images/icon-1.png";
import icon2 from "@/assets/images/icon-2.svg";
import icon3 from "@/assets/images/icon-3.svg";
import icon4 from "@/assets/images/icon-4.svg";
import { hex, motion } from "motion/react";
import { fadeIn } from "@/utils/motion";
const Hero = () => {
  return (
    <>
      <motion.section
        variants={fadeIn("up  ", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="bg-bg-dark overflow-hidden hidden xl:block"
      >
        <div className="main max-w-[1420px] mx-auto relative">
          <Container>
            <div className="main flex justify-between items-center gap-20">
              <div className="left max-w-[668px]">
                <div className="text">
                  <h1 className="font-urbanist font-semibold text-6xl text-white leading-[120%] ">
                    Discover Your Dream Property with Estatein
                  </h1>
                  <p className="font-urbanist font-medium text-lg leading-[150%] text-text-secondary pt-6 pr-">
                    Your journey to finding the perfect property begins here.
                    Explore our listings to find the home that matches your
                    dreams.
                  </p>
                </div>
                <div className="flex items-center gap-5 pt-20 pb-15">
                  <Button text="Learn More" />
                  <Button
                    text="Browse Properties"
                    className={"bg-accent-purple! "}  href={'#properties'}
                  />
                </div>
                <div className="spinner absolute top-[20%] left-[57%] -translate-x-1/2 animate z-20">
                  <img src={spinner} alt="" />
                </div>

                {/* card */}
                <div className="flex items-center gap-5">
                  <Card title={"200+"} description={"Happy Customer"} />
                  <Card title={"10k+"} description={"Properties For Clients"} />
                  <Card title={"16+"} description={"Years of Experience"} />
                </div>
              </div>
              <div className="w-[920px] h-[814px]"></div>
            </div>

            <div className="right absolute right-[-25%] top-0 max-w-[950px] w-full">
              <img src={banner} alt="" className="w-full " />
            </div>
          </Container>
        </div>
      </motion.section>

      {/* mobile Banner */}
      <section className="py-5 px-4 bg-bg-dark md:hidden overflow-hidden">
        <div className="main ">
          <div className="img rounded-md  relative ">
            <img src={banner} alt="" className="w-full" />
                      <div className="spinner absolute bottom-[-10%] md:bottom-[-5%] left-[15%] md:left-[10%] -translate-x-1/2 animate z-20">
                  <img src={spinner} alt="" className="w-full max-w-[150px]" />
                </div>
          </div>
          <div className="text pb-10 pt-14">
            <h1 className="font-urbanist font-semibold text-[28px] md:text-4xl text-white leading-[150%]">Discover Your Dream Property with Estatein</h1>
            <p className="font-urbanist font-medium text-sm md:text-lg leading-[150%] text-text-secondary">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          {/* button */}
    <div className="flex flex-col md:flex-row items-center gap-5 pb-10">
                  <Button text="Learn More" className={'w-full!'} />
                  <Button
                    text="Browse Properties"
                    className={"bg-accent-purple! w-full! "} href={'#properties'}
                  />
                </div>

          {/* cards */}
           <div className="grid grid-cols-2 items-center gap-5 py-3">
                  <Card title={"200+"} description={"Happy Customer"} />
                  <Card title={"10k+"} description={"Properties For Clients"} />
                  <div className="col-span-2"><Card title={"16+"} description={"Years of Experience"} /></div>
                </div>
        </div>
      </section>

      {/* tablet Banner */}
      <section className="py-5 px-4 bg-bg-dark hidden md:block xl:hidden">
        <div className="main ">
         <div className="flex items-center gap-5 pb-10">
          <div className="text pb-10 pt-14">
            <h1 className="font-urbanist font-semibold text-[28px] md:text-4xl text-white leading-[150%]">Discover Your Dream Property with Estatein</h1>
            <p className="font-urbanist font-medium text-sm md:text-lg leading-[150%] text-text-secondary">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
             <div className="img rounded-md relative ">
            <img src={banner} alt="" className="w-full" />
                      <div className="spinner absolute bottom-[-10%] md:bottom-[-5%] left-[15%] md:left-[10%] -translate-x-1/2 animate z-20">
                  <img src={spinner} alt="" className="w-full max-w-[100px]" />
                </div>
          </div>
         </div>



          {/* button */}
    <div className="flex flex-col md:flex-row items-center gap-5 pb-10">
                  <Button text="Learn More" className={'w-full!'} />
                  <Button
                    text="Browse Properties"
                    className={"bg-accent-purple! w-full! "}  href={'#properties'}
                  />
                </div>

          {/* cards */}
           <div className="grid grid-cols-3 items-center gap-5 py-3">
                  <Card title={"200+"} description={"Happy Customer"} />
                  <Card title={"10k+"} description={"Properties For Clients"} />
                  <div className=""><Card title={"16+"} description={"Years of Experience"} /></div>
                </div>
        </div>
      </section>



      {/* card section */}
      <motion.div
        variants={fadeIn("up", 0.5)}
         initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="bg-bg-main border-y  border-border-soft px-4"
      >
        <div className="md:py-5 md:px-5 grid grid-cols-2 lg:grid-cols-4 gap-3 py-2.5">
          <IconCard src={icon1} text={"Find Your Dream Home"} />
          <IconCard src={icon4} text={"Unlock Property Value"} />
          <IconCard src={icon2} text={"Effortless Property Management"} />
          <IconCard
            src={icon3}
            text={"Smart Investments, Informed Decisions"}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
