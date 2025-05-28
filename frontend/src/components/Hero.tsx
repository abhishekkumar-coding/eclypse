import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
    return (
        <section className="bg-black max-w-7xl mx-auto text-white px-4 sm:px-8 py-6 mt-20">
            {/* Header Section */}
            <motion.div
                className="flex items-end justify-between gap-4"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.img
                    className="w-[120px] sm:w-[380px]"
                    src="/images/Hero_header.png"
                    alt="Logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                />
                <motion.h1
                    className="text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    © 2025
                </motion.h1>
            </motion.div>

            {/* Hero Image with overlay text */}
            <motion.div
                className="mt-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <motion.p
                    className="absolute bottom-4 right-4 text-sm"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                >
                    A silhouette worth remembering
                </motion.p>
                <motion.img
                    src="/images/hero.png"
                    alt="Hero"
                    className="w-full h-[550px] object-cover"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1.2 }}
                />
            </motion.div>

            {/* Description and Link */}
            <motion.div
                className="py-18 mx-auto"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                <p className="text-[20px] md:text-[48px] flex flex-col gap-15 w-[70%] font-light">
                    Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
                </p>
                <motion.a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-[24px] md:text-[40px] underline underline-offset-4 hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                >
                    Learn more about Eclypse
                    <motion.span
                        className="text-[24px] md:text-[40px] -rotate-[30deg] inline-block transition-transform"
                        whileHover={{ rotate: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FaArrowRight />
                    </motion.span>
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
