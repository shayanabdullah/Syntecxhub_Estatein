import React from "react";
import Container from "../container/Container";
import star from "@/assets/images/star.svg";
import Button from "../common Button/Button";
import FeaturedCard from "../card/FeaturedCard";
import card1 from "@/assets/images/featuredCard-1.svg";
import card2 from "@/assets/images/featuredCard-2.svg";
import card3 from "@/assets/images/featuredCard-3.svg";
import card4 from "@/assets/images/featuredCard-4.jpg";
import card5 from "@/assets/images/featuredCard-5.jpg";
import card6 from "@/assets/images/featuredCard-6.jpg";
import card7 from "@/assets/images/featuredCard-7.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { fadeIn } from "@/utils/motion";

const properties = [
  {
    id: 1,
    image: card2,
    title: "Seaside Serenity Villa",
    half: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..",
    full: "with a bright living space and a private garden.",
    bedroom: "4-Bedroom",
    bathroom: "3-Bathroom",
    price: "$550,000",
  },
  {
    id: 2,
    image: card3,
    title: "Metropolitan Haven",
    half: "A chic and fully-furnished 2-bedroom apartment with ..",
    full: "panoramic city views. Featuring modern interiors, and access to premium building amenities.",
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    price: "$320,000",
  },

  {
    id: 3,
    image: card1,
    title: "Willowbrook Townhouse",
    half: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    full: "Featuring a modern open floor plan, a private patio space, and access to a community garden.",
    bedroom: "3-Bedroom",
    bathroom: "3-Bathroom",
    price: "$410,000",
  },
  {
    id: 4,
    image: card4,
    title: "Metropolitan Haven",
    half: "A chic and fully-furnished 2-bedroom apartment with..",
    full: "panoramic city views.Located in the heart of downtown with building security, a rooftop lounge, and modern interiors.",
    bedroom: "2-Bedroom",
    bathroom: "2-Bathroom",
    price: "$295,000",
  },
  {
    id: 5,
    image: card5,
    title: "Riverside Retreat",
    half: "A cozy 3-bedroom, 2-bathroom home beside a peaceful riverbank...",
    full: "Perfect for nature lovers with a spacious backyard, minimalist interiors, and a relaxing environment.",
    bedroom: "3-Bedroom",
    bathroom: "2-Bathroom",
    price: "$360,000",
  },
  {
    id: 6,
    image: card6,
    title: "Pinewood Estate",
    half: "A luxurious 5-bedroom, 4-bathroom estate surrounded by pine trees...",
    full: "Comes with a private pool, outdoor barbeque area, and elegant interior design throughout.",
    bedroom: "5-Bedroom",
    bathroom: "4-Bathroom",
    price: "$780,000",
  },
  {
    id: 7,
    image: card7,
    title: "Sunset Horizon Loft",
    half: "A modern 1-bedroom loft designed for city living with sunset-facing balconies...",
    full: "Ideal for young professionals, featuring smart home technology and an open-concept layout.",
    bedroom: "1-Bedroom",
    bathroom: "1-Bathroom",
    price: "$210,000",
  },
];

const Featured = () => {
  return (
    <>
      <motion.section
         variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
      className="py-[120px] px-4 bg-bg-dark" id="properties">
        <div className="main ">
          <Container>
            <div className="icon pb-4">
              <img src={star} alt="" />
            </div>
            <div className="header flex items-center justify-between md:pb-20 pb-10">
              <div className="text ">
                <h2 className="font-urbanist font-semibold text-[28px] md:text-5xl text-white pb-3.5 ">
                  Featured Properties
                </h2>
                <p className="font-urbanist font-medium text-sm md:text-base text-text-secondary md:w-[600px] lg:w-full!"
                >
                  Explore our handpicked selection of featured properties. Each
                  listing offers a glimpse into exceptional homes and
                  investments available through
                  <span className="md:block">
                    Estatein. Click "View Details" for more information.
                  </span>
                </p>
              </div>
              <div className="btn hidden md:block">
                <Button text={"View All Properties"} className="bg-bg-main!" />
              </div>
            </div>

            {/* cards */}
            <div className="md:pb-13 relative! ">
                <Swiper
              slidesPerView={1}
              spaceBetween={10}
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
                
                nextEl: ".featured-next",
                prevEl: ".featured-prev",
              }}
              modules={[Navigation, Pagination]}
            >
              {properties.map((property) => (
                <SwiperSlide key={property.id}>
                  <FeaturedCard
                    src={property.image}
                    title={property.title}
                    halfdes={property.half}
                    fulldes={property.full}
                    bedroom={property.bedroom}
                    bathroom={property.bathroom}
                    price={property.price}
                    variants={fadeIn('up', 0.6)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
            {/* custom btn */}
        <div className="flex items-center justify-between pt-5 mt-5  border-t border-bg-card">
           <div className="btn md:hidden w-[60%]">
                <Button text={"View All Properties"} className="bg-bg-main! py-5! text-sm! " />
              </div>
           <div className="flex items-center gap-2 w-[40%] md:w-full  justify-center md:justify-end">
               <button className=" featured-prev py-5 px-5 rounded-full bg-bg-dark border-main hover:bg-bg-main transition-all duration-200 ease-in-out text-white text-2xl  cursor-pointer">
                <FaArrowLeft />
            </button>
               <button className="featured-next py-5 px-5 rounded-full bg-bg-dark border-main hover:bg-bg-main transition-all duration-200 ease-in-out text-white text-2xl  cursor-pointer">
                <FaArrowRight />
            </button>
         </div>
        </div>
          </Container>
        </div>
      </motion.section>
    </>
  );
};

export default Featured;
