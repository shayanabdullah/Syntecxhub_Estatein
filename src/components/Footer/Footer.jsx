import React from "react";
import Container from "../container/Container";
import logo from "@/assets/images/logo.svg";
import { RiMailAiLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
const footerMenu = [
  {
    id: 1,
    title: "Home",
    links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      "Our Story",
      "Our Works",
      "How It Works",
      "Our Team",
      "Our Clients",
    ],
  },
  {
    id: 3,
    title: "Properties",
    links: ["Portfolio", "Categories"],
  },
  {
    id: 4,
    title: "Services",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  },
  {
    id: 5,
    title: "Contact Us",
    links: ["Contact Form", "Our Offices"],
  },
];
import { motion } from "motion/react";
import { fadeIn } from "@/utils/motion";

const Footer = () => {
  return (
    <>
      <motion.footer
         variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true }}
      className="py-20 bg-bg-dark px-4" id="contact">
        <Container>
          <div className="main flex flex-col justify-between items-start lg:flex-row gap-13.5  lg:gap-25">
            <div className="right lg:w-[25%] w-full">
              <div className="logo pb-6">
                <a href="#">
                  <img src={logo} alt="" className="cursor-pointer" />
                </a>
              </div>
              <div className="mail  w-full">
                <div className="input text-text-secondary w-full relative">
                  <i className="absolute top-[19px] left-4 text-xl">
                    <RiMailAiLine />
                  </i>
                  <input
                    type="text"
                    className=" pl-10 pr-5 py-4  bg-bg-dark rounded-lg border-main w-full text-white outline-0 focus-within:outline-1 focus-within:outline-border-light"
                    placeholder="Enter Your Email"
                  />
                  <i className="absolute top-3.5 right-4 text-3xl cursor-pointer">
                    <IoIosSend />
                  </i>
                </div>
              </div>
            </div>
            <div className="left lg:w-[75%] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:gap-[90px] gap-5 ">
              {footerMenu.map((section) => (
                <div
                  className="border-r border-b border-border-soft px-2  nth-[2]:border-r-0 nth-[4]:border-r-0 md:nth-[2]:border-r! md:nth-[5]:border-0 md:border-b-0  lg:border-0 lg:nth-[2]:border-r-0! "
                  key={section.id}
                >
                  <h3 className="font-urbanist font-medium text-lg leading-6 text-text-secondary pb-10.5 inline-block ">
                    {section.title}
                  </h3>

                  <ul>
                    {section.links.map((link, index) => (
                      <li
                        key={index}
                        className="font-urbanist font-medium text-base leading-6 text-white pb-4 cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </motion.footer>
      <motion.footer
         variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
      className="py-3.5 bg-bg-main border-t border-border-soft">
        <Container>
          <div className="main flex flex-col lg:flex-row items-center justify-center w-full md:justify-between px-4 gap-y-5">
            <div className="right">
              <h3 className="font-urbanist font-medium text-xs md:text-sm leading-6 text-white">
                @2025 Estatein. All Rights Reserved.
                <span className="pl-2">
                  Terms & Conditions 
                </span>
              </h3>
             
            </div>
             <p className="font-urbanist font-medium text-xs md:text-sm leading-6 text-white">Developed by Shayan Abdullah</p>
            <div className="logos flex items-center gap-3 text-white  text-xl">
              <a
                href="https://www.facebook.com/share/1KTBsRTZge/"
                className="p-4 rounded-full bg-bg-dark hover:bg-bg-card transition-all duration-200 ease-in-out"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/shayan-abdullah?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                className="p-4 rounded-full bg-bg-dark hover:bg-bg-card transition-all duration-200 ease-in-out"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/shayanabdullah"
                className="p-4 rounded-full bg-bg-dark hover:bg-bg-card transition-all duration-200 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href=""
                className="p-4 rounded-full bg-bg-dark hover:bg-bg-card transition-all duration-200 ease-in-out"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </Container>
      </motion.footer>
    </>
  );
};

export default Footer;
