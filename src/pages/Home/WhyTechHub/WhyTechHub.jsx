import React from "react";
import { FaCheckCircle, FaLayerGroup, FaBalanceScale } from "react-icons/fa";

const points = [
  {
    icon: FaCheckCircle,
    title: "Reliable Information",
    desc: "Every device specification has been thoroughly verified.",
  },
  {
    icon: FaLayerGroup,
    title: "Multi-Brand",
    desc: "All kinds of devices from 17 popular brands in one place.",
  },
  {
    icon: FaBalanceScale,
    title: "Easy Comparison",
    desc: "Quickly find what you need by filtering according to brand and type.",
  },
];

const WhyTechHub = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
          Why <span className="text-teal-400">TechHub</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center px-4">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-teal-400/10 flex items-center justify-center">
                <Icon className="text-2xl text-teal-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTechHub;
