import React from "react";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
    return (
        <motion.section
            className="max-w-7xl mx-auto grid grid-cols-3 gap-2 p-4 bg-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Large Image */}
            <motion.div
                className="col-span-3 md:col-span-2"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <img
                    src="/images/gallery_img_1.png"
                    alt="Gallery Image 1"
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Small Images with staggered animation */}
            {[
                "/images/gallery_img_2.png",
                "/images/gallery_img_3.png",
                "/images/gallery_img_4.png",
            ].map((src, index) => (
                <motion.div
                    key={index}
                    className="h-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                >
                    <img src={src} alt={`Gallery Image ${index + 2}`} className="w-full h-auto object-cover" />
                </motion.div>
            ))}

            {/* Image 5 - only visible on md+ */}
            <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <img src="/images/gallery_img_5.png" alt="Gallery Image 5" className="w-full h-auto object-cover" />
            </motion.div>
        </motion.section>
    );
};

export default Gallery;
