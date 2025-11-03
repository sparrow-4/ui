import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Mic } from "lucide-react";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <motion.div
        animate={{
          scale: focus ? 1.02 : 1,
          boxShadow: focus
            ? "0 0 25px rgba(99,102,241,0.25)"
            : "0 4px 10px rgba(0,0,0,0.05)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className={`relative flex items-center w-full max-w-lg rounded-2xl 
          backdrop-blur-xl bg-white/30 border border-white/20
          shadow-inner overflow-hidden transition-all duration-500`}
      >
        {/* Search Icon */}
        <Search className="absolute left-4 text-gray-600 w-5 h-5" />

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search gadgets, brands or accessories..."
          className="w-full pl-12 pr-24 py-3 text-[15px] bg-transparent 
            text-gray-800 placeholder-gray-500 focus:outline-none"
        />

        {/* Voice Icon */}
        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="absolute right-[65px] text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <Mic size={18} />
        </motion.button>

        {/* Search Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="absolute right-0 h-full px-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold 
            rounded-l-none"
        >
          Search
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
