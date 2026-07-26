import React from "react";
import { Link } from "react-router";
import { FaMobileAlt, FaLaptop, FaClock, FaTabletAlt } from "react-icons/fa";

const categories = [
  { type: "mobile", label: "Mobile", icon: FaMobileAlt },
  { type: "laptop", label: "Laptop", icon: FaLaptop },
  { type: "watch", label: "Watch", icon: FaClock },
  { type: "tablet", label: "Tablet", icon: FaTabletAlt },
];

const CategoryHighlights = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Browse by <span className="text-teal-400">Category</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.map(({ type, label, icon: Icon }) => (
            <Link
              key={type}
              to={`/products?type=${type}`}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/40 hover:bg-teal-400/5 transition-all duration-300"
            >
              <Icon className="text-3xl text-teal-400" />
              <span className="text-gray-200 font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
