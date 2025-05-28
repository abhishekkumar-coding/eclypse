import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black text-white z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
        <div className="w-8 sm:w-12 font-bold">
          <NavLink to={"/"}>
            <img src="/images/logo.png" alt="Eclypse Logo" />
          </NavLink>
        </div>
        <nav className="flex items-center space-x-12 text-[12px] sm:text-[19px]">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              isActive ? "underline font-bold" : "hover:underline"
            }
          >
            Cart
          </NavLink>

          <button className="bg-white text-black px-3 py-1 rounded">Buy</button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
