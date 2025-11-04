import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, GitCompare } from "lucide-react";
import Search from "../Search";
import { Link } from "react-router-dom";

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcon = ({ icon, label, color, count = 0, onClick }) => {
  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative bg-transparent outline-none w-[2em] h-[2em] sm:w-[2.5em] sm:h-[2.5em] md:w-[3em] md:h-[3em] [perspective:24em] [transform-style:preserve-3d] group"
    >
      <span
        className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
        style={{
          ...getBackgroundStyle(color),
          boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
        }}
      ></span>
      <span
        className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] group-hover:[transform:translateZ(2em)]"
        style={{
          boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
        }}
      >
        <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center text-white">
          {icon}
        </span>
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[0.65em] font-bold rounded-full w-[1.8em] h-[1.8em] flex items-center justify-center shadow-lg">
            {count}
          </span>
        )}
      </span>
      <span className="absolute top-full left-0 right-0 text-center text-[0.85em] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </button>
  );
};

const Header = () => {
  return (
    <header className="w-full">
      {/* TOP STRIP */}{" "}
      <div className="top-strip py-2">
        {" "}
        <div className="container">
          {" "}
          <div className="flex items-center justify-between ">
            {" "}
            <div className="col1 w-[50%]">
              {" "}
              <p className="text-[14px] font-[500] text-black">
                {" "}
                Get up to 50% off new season styles, limited time only!{" "}
              </p>{" "}
            </div>{" "}
            <div className="col2 flex justify-end items-center ">
              {" "}
              <ul className="flex items-center gap-4">
                {" "}
                <li className="list-none">
                  {" "}
                  <Link to="/help" className="text-[14px] text-black link">
                    {" "}
                    Help center{" "}
                  </Link>{" "}
                </li>{" "}
                <li className="list-none">
                  {" "}
                  <Link
                    to="/order-tracking"
                    className="text-[14px] text-black link"
                  >
                    {" "}
                    Order Tracking{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      {/* MAIN HEADER */}
      <div className="py-2 px-2 bg-gray
       shadow-sm mt-[4px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* LOGO */}
            <div className="flex justify-center lg:justify-start">
              <a href="/">
                <motion.img
                  src="/logoo.png"
                  alt="Logo"
                  className="w-[200px] sm:w-[250px] h-auto cursor-pointer"
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
              </a>
            </div>

            {/* SEARCH BAR */}
            <div className="w-full sm:flex-1 sm:px-4">
              <Search />
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* LOGIN */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/login">
                    <button className="relative w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
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
                  </a>
                </motion.div>

                {/* REGISTER */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="/register">
                    <button className="relative w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
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
                  </a>
                </motion.div>
              </div>

              {/* DIVIDER */}
              <div className="hidden lg:block h-16 w-px bg-gray-300"></div>

              {/* GLASS ICONS */}
              <div className="flex items-center gap-4">
                <GlassIcon
                  icon={<GitCompare className="w-full h-full" />}
                  label="Compare"
                  color="blue"
                  count={0}
                  onClick={() => (window.location.href = "/compare")}
                />
                <GlassIcon
                  icon={<Heart className="w-full h-full" />}
                  label="Wishlist"
                  color="red"
                  count={0}
                  onClick={() => (window.location.href = "/wishlist")}
                />
                <GlassIcon
                  icon={<ShoppingCart className="w-full h-full" />}
                  label="Cart"
                  color="purple"
                  count={0}
                  onClick={() => (window.location.href = "/cart")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;























{/* MAIN HEADER */}
      <div className="py-6 px-4 bg-black shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* LOGO */}
            <div className="flex justify-center lg:justify-start">
              <a href="/">
                <motion.img
                  src="/logoo.png"
                  alt="Logo"
                  className="w-[200px] sm:w-[250px] h-auto cursor-pointer"
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
              </a>
            </div>

            {/* SEARCH BAR */}
            <div className="w-full lg:flex-1 lg:px-8 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-6 py-3 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-700 pr-12 transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - GLASS ICONS AND BUTTONS */}
            <div className="flex items-center gap-8">
             

             
              {/* BUTTONS */}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                {/* LOGIN */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="/login">
                    <button className="relative w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
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
                  </a>
                </motion.div>

                {/* REGISTER */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="/register">
                    <button className="relative w-36 h-11 rounded-xl bg-gray-800 text-white font-semibold overflow-hidden border border-gray-700 shadow-md">
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
                  </a>
                </motion.div>
              </div>
              
               {/* DIVIDER */}
              <div className="hidden lg:block h-16 w-px bg-gray-300"></div>



               {/* GLASS ICONS */}
              <div className="flex items-center gap-4">
                <GlassIcon
                  icon={<GitCompare className="w-full h-full" />}
                  label="Compare"
                  color="blue"
                  count={0}
                  onClick={() => window.location.href = '/compare'}
                />
                <GlassIcon
                  icon={<Heart className="w-full h-full" />}
                  label="Wishlist"
                  color="red"
                  count={0}
                  onClick={() => window.location.href = '/wishlist'}
                />
                <GlassIcon
                  icon={<ShoppingCart className="w-full h-full" />}
                  label="Cart"
                  color="purple"
                  count={0}
                  onClick={() => window.location.href = '/cart'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;