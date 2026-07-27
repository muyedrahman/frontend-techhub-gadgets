import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2.5 focus-within:border-teal-400/60 transition-colors">
      <FaSearch className="text-gray-400 text-sm mr-2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products by name..."
        className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full"
      />
    </div>
  );
};

export default SearchBar;
