import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Search from "../Search";

const Header = () => {
  return (
    <header className="w-full">
      {/* TOP STRIP */}
      <div className="top-strip py-2">
        <div className="container">
          <div className="flex items-center justify-between ">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[500] text-black">
                {" "}
                Get up to 50% off new season styles, limited time only!
              </p>
            </div>

            <div className="col2 flex justify-end items-center ">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link to="/help" className="text-[14px] text-black link">
                    Help center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[14px] text-black link"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto mt-3 sm:mt-0">
          {/* LOGO */}
          <div className="flex justify-center sm:justify-start w-full sm:w-auto">
            <Link to="/">
              <motion.img
                src="/logoo.png"
                alt="Logo"
                className="w-[180px] sm:w-[220px] md:w-[250px] h-auto cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  filter: "drop-shadow(0 0 10px rgba(99,102,241,0.4))",
                }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </div>

          {/* SEARCH BAR */}
          <div className="w-full sm:flex-1 sm:px-4">
            <Search />
          </div>

          {/* BUTTONS */}
          <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto mt-3 sm:mt-0">
            {/* LOGIN */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/login">
                <button className="relative w-32 sm:w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
                  <span className="relative z-10">Login</span>
                  <motion.div
                    className="absolute top-1/2 left-0 w-10 h-10 rounded-full bg-blue-500 blur-md opacity-70"
                    animate={{
                      x: ["0%", "120%", "0%"],
                      y: ["-50%", "-50%", "-50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </button>
              </Link>
            </motion.div>

            {/* REGISTER */}
            <motion.div  whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-32 sm:w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
              <Link to="/register">
                <button className="relative w-32 sm:w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
                  <span className="relative z-10">Register</span>
                  <motion.div
                    className="absolute top-1/2 left-0 w-10 h-10 rounded-full bg-pink-500 blur-md opacity-70"
                    animate={{
                      x: ["0%", "120%", "0%"],
                      y: ["-50%", "-50%", "-50%"],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
