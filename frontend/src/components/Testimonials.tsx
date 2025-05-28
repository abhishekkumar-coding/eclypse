import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 my-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-xl text-gray-400 tracking-widest text-center sm:text-left">
        OUR CUSTOMERS
      </h1>

      <div className="flex justify-between gap-10 py-10">
        {/* Left: Quote Section */}
        <motion.div
          className="flex flex-row items-start gap-6 max-w-full lg:max-w-[55%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative bottom-3">
            <h1 className="text-6xl sm:text-9xl">“</h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-xl sm:text-2xl lg:text-4xl leading-snug">
              Understated, but unforgettable. It feels like it was made for me
            </p>
            <div>
              <p className="text-gray-200 text-sm">Random Name</p>
              <h6 className="text-gray-600 font-semibold text-xs">S.rao, UP</h6>
            </div>
          </div>
        </motion.div>

        {/* Right: Avatar + Arrow Section */}
        <motion.div
          className="flex flex-row items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <span className="text-5xl sm:text-7xl lg:text-9xl">
            <IoMdArrowDropleft />
          </span>
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={"/images/profile_1.png"}
                alt={`customer-1`}
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-20 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={"/images/profile_2.jpeg"}
                alt={`customer-2`}
              />
            </div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-20 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-full"
                src={"/images/profile_3.jpeg"}
                alt={`customer-3`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
