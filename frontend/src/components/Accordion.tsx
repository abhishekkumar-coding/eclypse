import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Accordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      title: "Size & Fit",
      description:
        'The model is 6\'1" and is wearing a size M. This item fits true to size, so we recommend ordering your usual size.',
    },
    {
      title: "Delivery & Returns",
      description:
        "Standard delivery within 5-7 business days. Free returns within 30 days of purchase. See our return policy for more info.",
    },
    {
      title: "How This Was Made",
      description:
        "Crafted using eco-friendly materials and sustainable production processes. Made with 100% organic cotton and ethically sourced labor.",
    },
  ];

  const handleSection = (index: number) => {
    setOpenSection((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <ul className="w-full flex flex-col gap-14 text-[20px] sm:text-[32px]">
        {sections.map((section, index) => (
          <motion.li
            key={index}
            className="text-white border-b border-[#3D3D3D] pb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="flex items-center justify-between cursor-pointer select-none"
              onClick={() => handleSection(index)}
            >
              <p>{section.title}</p>
              <span
                className={`transform transition-transform duration-300 ${
                  openSection === index ? "-rotate-90" : "rotate-90"
                }`}
              >
                <FaArrowRight />
              </span>
            </div>

            {/* AnimatePresence for smooth content toggle */}
           <AnimatePresence initial={false}>
  {openSection === index && (
    <motion.div
      key={`content-${index}`}
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { height: "auto", opacity: 1, marginTop: 16 },
        collapsed: { height: 0, opacity: 0, marginTop: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    //   ref={(el) => (contentRefs.current[index] = el)}
    >
      <p className="text-[16px] sm:text-[20px] text-gray-300 pt-2">
        {section.description}
      </p>
    </motion.div>
  )}
</AnimatePresence>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
