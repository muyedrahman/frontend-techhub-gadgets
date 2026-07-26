import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rafiul Islam",
    text: "The specifications are very detailed and accurate, making it easy to compare.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    text: "Being able to see so many brands in one place is truly convenient.",
    rating: 4,
  },
  {
    name: "Tanvir Ahmed",
    text: "The site looks amazing and is very easy to use.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
          What People <span className="text-teal-400">Say</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <FaQuoteLeft className="text-teal-400/40 text-2xl mb-3" />
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-sm">{t.name}</span>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
