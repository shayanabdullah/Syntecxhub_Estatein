import React from 'react'
import Container from "../container/Container";
import Button from "../common Button/Button";
import star from "@/assets/images/star.svg";
import ClientCard from "../card/ClientCard";
import client3 from "@/assets/images/client-3.svg";
import client1 from "@/assets/images/client.svg";
import client2 from "@/assets/images/client-2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from 'motion/react';
import { fadeIn } from '@/utils/motion';
const faqs = [
  {
    id: 1,
    title: "How do I search for properties on Estatein?",
    half: "Learn how to use our user-friendly search tools to find ..",
    full: "properties that match your criteria. Our platform allows you to filter properties by location, price range, number of bedrooms, property type, and more. You can also save your favorite listings and compare them easily. Simply visit the Properties section and start exploring.",
  },
  {
    id: 2,
    title: "What documents do I need to sell my property through Estatein?",
    half: "Find out about the necessary...",
    full: "documentation for listing your property with us.To sell your property, you typically need proof of ownership, identification documents, property tax receipts, and any relevant legal or maintenance records. Our team will guide you step-by-step and ensure all required documents are properly submitted.",
  },
  {
    id: 3,
    title: "How can I contact an Estatein agent?",
    half: "Discover the different ways you can get in touch with our experienced agents...",
    full: "You can reach our agents through phone, email, live chat, or by booking an appointment directly from our website. Each property page also includes a dedicated contact button that connects you with an expert instantly.",
  },
  {
  id: 4,
  title: "Is virtual property touring available on Estatein?",
  half: "Yes! Estatein offers virtual tours so you can explore properties from anywhere...",
  full: "Our virtual tours provide a 360° view of the entire property, letting you check the interior layout, room sizes, and outdoor spaces before visiting in person. This feature saves time and helps you shortlist the best options quickly.",
},
{
  id: 5,
  title: "Does Estatein assist with property financing?",
  half: "We provide guidance to help you understand financing options for buying a property...",
  full: "Estatein works closely with trusted financial partners to offer mortgage guidance, loan comparisons, and budgeting advice. Our agents can walk you through interest rates, payment plans, and eligibility checks to make the process easier.",
},
{
  id: 6,
  title: "How long does it take to list my property on Estatein?",
  half: "Listing your property is quick and simple, usually taking less than 24 hours...",
  full: "Once you submit your property details, images, and required documents, our team reviews everything for accuracy. After the verification process, your property goes live on the platform and becomes visible to potential buyers.",
},

];

const FAQ = () => {
  return (
    <motion.section 
    variants={fadeIn("up  ", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
    className=" px-4  bg-bg-dark" id='services'>
      <Container>
        <div className="main">
          <div className="icon pb-4">
            <img src={star} alt="" />
          </div>
          <div className="header flex items-center justify-between md:pb-20 pb-10">
            <div className="text md:w-[70%]">
              <h2 className="font-urbanist font-semibold text-[28px] text-4xl lg:text-5xl text-white pb-3.5 ">
               Frequently Asked Questions
              </h2>
              <p className="font-urbanist font-medium text-sm lg:text-base text-text-secondary ">
               Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
              </p>
            </div>
            <div className="btn hidden md:block">
              <Button text={"View All FAQ’s"} className="bg-bg-main!" />
            </div>
          </div>
          <div className="">
          <Swiper       
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                type: "fraction",
              }}
              breakpoints={{
                768: {
                    slidesPerView: 2,
                },
                1440 : {
                  slidesPerView : 3,
                }
              }}
              navigation={{
                
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Navigation, Pagination]}>
                {
                    faqs.map(item=> (
                        <SwiperSlide key={item.id}>
                         <ClientCard title={item.title} details={item.half} fulldes={item.full} />
                        </SwiperSlide>
                    ))
                }
            
          </Swiper>
            <div className="flex items-center justify-between pt-5 mt-5  border-t border-bg-card">
           <div className="flex items-center gap-2 w-full justify-end">
               <button className=" custom-prev py-5 px-5 rounded-full bg-bg-dark border-main hover:bg-bg-main transition-all duration-200 ease-in-out text-white text-2xl  cursor-pointer">
                <FaArrowLeft />
            </button>
               <button className="custom-next py-5 px-5 rounded-full bg-bg-dark border-main hover:bg-bg-main transition-all duration-200 ease-in-out text-white text-2xl  cursor-pointer">
                <FaArrowRight />
            </button>
         </div>
        </div>
          </div>
        </div>
      </Container>
    </motion.section>





  )
}

export default FAQ