import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="max-w-7xl mx-auto text-white p-4 sm:p-6 text-sm flex items-center justify-between sm:py-10 h-56 gap-8 sm:gap-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Content */}
      <div className="flex items-start gap-10 w-2/3 h-full">
        {/* Logo and Navigation */}
        <motion.div
          className="w-full sm:w-1/3 flex flex-col gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center gap-5">
            <img
              src="/images/Hero_header.png"
              alt="logo"
              className="w-20 sm:w-[100px]"
            />
            <span className="transform -rotate-45 text-gray-400 text-lg sm:text-xl">
              <FaArrowRight />
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-4 text-[10px] sm:text-[20px] font-[500]">
            <p>Home</p>
            <hr className="h-4 border border-gray-400 transform rotate-[25deg]" />
            <p>About</p>
            <hr className="h-4 border border-gray-400 transform rotate-[25deg]" />
            <p>Buy</p>
            <hr className="h-4 border border-gray-400 transform rotate-[25deg]" />
            <p>Our Customers</p>
            <hr className="h-4 border border-gray-400 transform rotate-[25deg]" />
            <p>Contacts</p>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-start justify-between h-full py-7 text-xs sm:text-sm md:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <div>
            <p className="text-gray-500 font-[500]">CONTACT</p>
            <h2 className="text-[14px] sm:text-[20px]">+917668196232</h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <p className="text-gray-500 font-[500]">EMAIL</p>
            <h2 className="text-base sm:text-[14px]">
              abhiwebdev2.0@agmail.com
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Right Content */}
      <motion.div
        className="w-full sm:w-1/3 flex flex-col items-center sm:items-end justify-between h-full gap-4 sm:gap-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      >
        <div className="text-base sm:text-lg md:text-xl bg-white text-black rounded-full p-3 sm:p-4 transform -rotate-90">
          <FaArrowRight />
        </div>
        <p className="text-xs sm:text-sm text-gray-500">© 2025 Eclypse</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
