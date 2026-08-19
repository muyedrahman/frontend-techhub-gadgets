import React from "react";
import { HiOutlineShieldCheck, HiOutlineGlobeAlt, HiOutlineAdjustments } from "react-icons/hi";

const values = [
  {
    icon: HiOutlineShieldCheck,
    title: "Verified Specifications",
    desc: "Every device listed on TechHub is added with checked, accurate specs — no guesswork.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "17 Global Brands",
    desc: "From Apple to Xiaomi, we bring mobiles, laptops, tablets, and watches under one roof.",
  },
  {
    icon: HiOutlineAdjustments,
    title: "Easy to Compare",
    desc: "Filter by brand and device type to quickly find and understand what fits your needs.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          About <span className="text-teal-400">TechHub</span>
        </h1>
        <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          TechHub is a gadget catalog built to help you explore and understand
          mobiles, laptops, tablets, and watches from the world's leading
          brands — all in one place, with no clutter and no pressure to buy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center px-4">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-teal-400/10 flex items-center justify-center">
                <Icon className="text-2xl text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-lg font-semibold text-white mb-2">Have a question?</h2>
          <p className="text-gray-400 text-sm mb-4">
            Reach out and we'll get back to you as soon as possible.
          </p>
          <a
            href="mailto:contact@techhub.com"
            className="text-teal-400 text-sm font-medium hover:underline"
          >
            contact@techhub.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;