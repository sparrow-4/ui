import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, GitCompare, Menu, X, Home, HelpCircle, Package, User, Settings, DollarSign, MessageCircle, Sun, Moon } from "lucide-react";
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

const SidebarMenuItem = ({ icon: Icon, label, onClick, badge, isActive = false }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
        isActive 
          ? 'bg-gray-700 text-white' 
          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
      }`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-left font-medium">{label}</span>
      {badge && (
        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </motion.button>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <header className="w-full">
      {/* TOP STRIP */}
      <div className="top-strip py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[500] text-black">
                Get up to 50% off new season styles, limited time only!
              </p>
            </div>
            <div className="col2 flex justify-end items-center">
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
      <div className="py-2 px-2 bg-gray shadow-sm mt-[4px]">
        {/* MOBILE MENU BUTTON */}
              <motion.button
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-lg bg-gray-800 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Menu className="w-6 h-6" />
              </motion.button>
        
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
              <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4">
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
              <div className="hidden lg:flex items-center gap-4">
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

      {/* METAMASK-STYLE SIDEBAR */}
      {/* METAMASK-STYLE SIDEBAR (LEFT SIDE) */}
<AnimatePresence>
  {isSidebarOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={toggleSidebar}
        className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden backdrop-blur-sm"
      />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}    // <-- start offscreen to the LEFT
        animate={{ x: 0 }}          // <-- slide in to visible
        exit={{ x: "-100%" }}       // <-- slide back to left when closing
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className={`fixed top-0 left-0 h-full w-[280px] shadow-2xl z-50 lg:hidden overflow-y-auto ${
          isDarkMode 
            ? 'bg-gradient-to-b from-gray-900 via-gray-850 to-gray-900' 
            : 'bg-gradient-to-b from-gray-100 via-white to-gray-100'
        }`}
        style={{
          backgroundImage: isDarkMode 
            ? 'radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)'
            : 'none'
        }}
      >
        
          
           <div className="p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">🦊</span>
                    </div>
                    <div>
                      <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ShopMask
                      </h2>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        v2.0.3842
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleSidebar}
                    className={`p-2 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </motion.button>
                </div>

                {/* Auth Buttons */}
                <div className="space-y-3 mb-6">
                  <motion.a
                    href="/login"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <button className="w-full relative h-11 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold overflow-hidden shadow-lg">
                      <span className="relative z-10">Login</span>
                    </button>
                  </motion.a>
                  <motion.a
                    href="/register"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <button className="w-full relative h-11 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold overflow-hidden shadow-lg">
                      <span className="relative z-10">Register</span>
                    </button>
                  </motion.a>
                </div>

                {/* Divider */}
                <div className={`h-px mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

                {/* Main Navigation */}
                <div className="space-y-1 mb-6">
                  <SidebarMenuItem
                    icon={Home}
                    label="Home"
                    isActive={true}
                    onClick={() => (window.location.href = "/")}
                  />
                  <SidebarMenuItem
                    icon={ShoppingCart}
                    label="Market"
                    onClick={() => (window.location.href = "/market")}
                  />
                  <SidebarMenuItem
                    icon={Package}
                    label="Pools"
                    onClick={() => (window.location.href = "/pools")}
                  />
                  <SidebarMenuItem
                    icon={GitCompare}
                    label="Compare"
                    onClick={() => (window.location.href = "/compare")}
                  />
                </div>

                {/* Account Section */}
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Account
                </div>
                <div className="space-y-1 mb-6">
                  <SidebarMenuItem
                    icon={User}
                    label="Portfolio"
                    onClick={() => (window.location.href = "/portfolio")}
                  />
                  <SidebarMenuItem
                    icon={Package}
                    label="History"
                    onClick={() => (window.location.href = "/history")}
                  />
                  <SidebarMenuItem
                    icon={Heart}
                    label="Wishlist"
                    onClick={() => (window.location.href = "/wishlist")}
                  />
                  <SidebarMenuItem
                    icon={ShoppingCart}
                    label="Cart"
                    onClick={() => (window.location.href = "/cart")}
                  />
                  <SidebarMenuItem
                    icon={Settings}
                    label="Setting"
                    onClick={() => (window.location.href = "/settings")}
                  />
                </div>

                {/* Currency Section */}
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Currency
                </div>
                <div className="space-y-1 mb-6">
                  <button
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl ${
                      isDarkMode 
                        ? 'text-gray-400 hover:bg-gray-700/50' 
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                      <DollarSign className="w-3 h-3 text-white" />
                    </div>
                    <span className="flex-1 text-left font-medium">USD</span>
                    <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>▼</span>
                  </button>
                </div>

                {/* Bottom Section */}
                <div className={`space-y-1 pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <SidebarMenuItem
                    icon={HelpCircle}
                    label="Get Support"
                    onClick={() => (window.location.href = "/support")}
                  />
                  <SidebarMenuItem
                    icon={MessageCircle}
                    label="Give feedback"
                    onClick={() => (window.location.href = "/feedback")}
                  />
                </div>

                {/* Theme Toggle */}
                <div className={`mt-6 flex items-center justify-between p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <button
                    onClick={() => setIsDarkMode(false)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      !isDarkMode 
                        ? 'bg-white text-gray-900 shadow-md' 
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsDarkMode(true)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      isDarkMode 
                        ? 'bg-gray-700 text-white shadow-md' 
                        : 'text-gray-600 hover:text-gray-700'
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                  </button>
                </div>
              </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

    </header>
  );
};

export default Header;