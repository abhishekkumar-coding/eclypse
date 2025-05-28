import React from "react";
import { motion } from "framer-motion";

const ProductShowcase: React.FC = () => {
  return (
    <motion.section
      className="bg-black text-white py-20 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-[20px] max-w-7xl mx-auto sm:text-[48px] pl-5 md:pl-0 mt-4 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Silhouette No. 1 – Vermilion
      </motion.h2>

      <div className="flex flex-col sm:flex-row w-full justify-center max-w-7xl mx-auto">
        {/* Left Image */}
        <motion.div
          className="w-full sm:w-1/2 overflow-hidden p-0 m-0"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/product_1.png"
            alt="Product"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col flex-wrap bg-white w-full sm:w-1/2 justify-between p-0 sm:p-10 text-black"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="hidden sm:block text-[15px] w-[50%] p-2 font-[500]">
            A tailored composition in motion. Cut from structured wool with a
            sculpted shoulder and softened hem, this piece captures presence
            without force. Worn here in the stillness of a city in motion.
          </p>

          <motion.div
            className="flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {["/images/product_2.png", "/images/product_3.png", "/images/product_4.png"].map(
              (src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  className="w-1/3 p-2"
                  alt={`Product Thumbnail ${index + 1}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                />
              )
            )}
          </motion.div>

          <div className="flex items-end gap-3 my-10">
            <h1 className="text-[36px] font-semibold">₹ 7,999</h1>
            <p className="text-[15px] text-[#767676]">MRP incl. of all taxes</p>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex flex-row items-end justify-between gap-5 sm:justify-start">
              <h2 className="text-lg text-[#767676] font-medium">
                Please select a size
              </h2>
              <button className="text-sm underline text-[#767676]">
                Size Chart
              </button>
            </div>

            <ul className="flex flex-wrap gap-3 mt-4">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <li
                  key={size}
                  className="border border-gray-400 text-sm px-4 py-2 rounded text-[#767676] cursor-pointer transition hover:bg-gray-200 hover:text-black"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row-reverse my-10 gap-4">
            <button className="bg-black text-white py-4 sm:py-0 cursor-pointer rounded-xl w-full sm:w-2/3 hover:opacity-90 transition font-medium">
              Buy
            </button>
            <button className="bg-white border border-gray-400 sm:py-0 px-4 cursor-pointer rounded-xl w-full sm:w-1/3 text-black transition font-medium hover:bg-gray-100">
              Add to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductShowcase;
