import React from "react";
import Container from "../container/Container";
import Button from "../common Button/Button";
import star from "@/assets/images/star.svg";
import star2 from '@/assets/images/review-stars.svg'
import ClientCard from "../card/ClientCard";
import client3 from "@/assets/images/client-3.svg";
import client1 from "@/assets/images/client.svg";
import client2 from "@/assets/images/client-2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "motion/react";
import { fadeIn } from "@/utils/motion";

const testimonials = [
  {
    id: 1,
    title: "Exceptional Service!",
    description:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    location: "USA, California",
    img: client3,
    starimg : star2
    
  },
  {
    id: 2,
    title: "Efficient and Reliable",
    description:
      "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    location: "USA, Florida",
    img: client2,
    starimg : star2
  },
  {
    id: 3,
    title: "Trusted Advisors",
    description:
      "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    location: "USA, Nevada",
    img: client1,
    starimg : star2
  },
  {
  id: 4,
  title: "Outstanding Support",
  description:
    "Estatein's team was incredibly helpful and guided us through every step with confidence. Their support made the entire journey smooth and enjoyable.",
  name: "Daniel Roberts",
  location: "USA, Chicago",
  img: client1,
  starimg : star2
},

{
  id: 5,
  title: "Smooth and Fast Deal",
  description:
    "We were able to buy our new home much faster than expected, thanks to Estatein's efficient process and expert negotiation.",
  name: "Olivia Brown",
  location: "USA, Seattle",
  img: client2,
  starimg : star2
},

{
  id: 6,
  title: "Best Real Estate Experience",
  description:
    "Without a doubt, this was our best real estate experience. The team was professional, friendly, and extremely reliable from start to finish.",
  name: "Ethan Williams",
  location: "USA, Boston",
  img: client3,
  starimg : star2
},

];

const Testimonials = () => {
  return (
    <motion.section 
    variants={fadeIn("up  ", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true }}
    className="px-4 bg-bg-dark" id="about">
      <Container>
        <div className="main">
          <div className="icon pb-4">
            <img src={star} alt="" />
          </div>
          <div className="header flex items-center  justify-between md:pb-20 pb-10">
            <div className="text ">
              <h2 className="font-urbanist font-semibold text-[28px] md:text-5xl text-white pb-3.5 ">
                What Our Clients Say
              </h2>
              <p className="font-urbanist font-medium text-sm md:text-base text-text-secondary ">
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Estatein for their real
                estate needs.
              </p>
            </div>
            <div className="btn hidden md:block">
              <Button text={"View All Testimonials"} className="bg-bg-main!" />
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
                
                nextEl: ".client-next",
                prevEl: ".client-prev",
              }}
              modules={[Navigation, Pagination]}>
            {
              testimonials.map(item => (
                <SwiperSlide key={item.id}>
                    <ClientCard name={item.name} src={item.img} title={item.title} details={item.description} location={item.location} star={item.starimg} buttonClass={'hidden!'}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
            <div className="flex items-center justify-between pt-5 mt-5  border-t border-bg-card">
           <div className="flex items-center gap-2 w-full justify-end">
               <button className=" client-prev py-5 px-5 rounded-full bg-bg-dark border-main hover:bg-bg-main transition-all duration-200 ease-in-out text-white text-2xl  cursor-pointer">
                <FaArrowLeft />
            </button>
               <button className="client-next py-5 px-5 rounded-full bg-bg-dark border-main hover:bg-bg-main transition-all duration-200 ease-in-out text-white text-2xl  cursor-pointer">
                <FaArrowRight />
            </button>
         </div>
        </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Testimonials;
