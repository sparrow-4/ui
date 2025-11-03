import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Search from "../Search";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <header>
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



      
      <div className="header py-4">
        <div className="container flex items-center justify-between py-4">
          <div className="col1 w-[25%]">
            <Link to="/">
              <motion.img
                src="/logoo.png"
                alt="Logo"
                className="w-[250px] sm:w-[200px] h-auto cursor-pointer"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "drop-shadow(0 0 8px rgba(99,102,241,0.3))",
                }}
                transition={{
                  duration: 3,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                  filter: "drop-shadow(0 0 14px rgba(99,102,241,0.5))",
                  transition: { type: "spring", stiffness: 250 },
                }}
                whileTap={{
                  scale: 0.96,
                  filter: "drop-shadow(0 0 4px rgba(99,102,241,0.3))",
                }}
              />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center justify-center gap-6">
            {/* LOGIN BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/login">
                <button className="relative w-36 h-12 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
                  <span className="relative z-10">Login</span>

                  {/* moving glowing ball */}
                  <motion.div
                    className="absolute top-1/2 left-0 w-10 h-10 rounded-full bg-blue-500 blur-md opacity-70"
                    animate={{
                      x: ["0%", "120%", "0%"],
                      y: ["-50%", "-50%", "-50%"], // keeps centered
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

            {/* REGISTER BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/register">
                <button className="relative w-36 h-12 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
                  <span className="relative z-10">Register</span>

                  {/* glowing ball for register */}
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
