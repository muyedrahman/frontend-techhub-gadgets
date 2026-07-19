// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import bannerImg1 from "../../../assets/banner-01.jpg";
// import bannerImg2 from "../../../assets/banner-02.jpg";
// import bannerImg3 from "../../../assets/banner-03.jpg";
// import bannerImg4 from "../../../assets/banner-04.jpg";
// import bannerImg5 from "../../../assets/banner-05.jpg";

// const Banner = () => {
//   return (
//     <Carousel>
//       <div>
//         <img src={bannerImg1} alt="Banner 1" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//         <img src={bannerImg2} alt="Banner 2" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div>
//         <img src={bannerImg3} alt="Banner 3" />
//         <p className="legend">Legend 3</p>
//       </div>
//       <div>
//         <img src={bannerImg4} alt="Banner 4" />
//         <p className="legend">Legend 4</p>
//       </div>
//       <div>
//         <img src={bannerImg5} alt="Banner 5" />
//         <p className="legend">Legend 5</p>
//       </div>
//     </Carousel>
//   );
// };

// export default Banner;

// 1

import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import bannerImg1 from "../../../assets/banner-01.jpg";
import bannerImg2 from "../../../assets/banner-02.jpg";
import bannerImg3 from "../../../assets/banner-03.jpg";
import bannerImg4 from "../../../assets/banner-04.jpg";
import bannerImg5 from "../../../assets/banner-05.jpg";

const slides = [
  { img: bannerImg1, legend: "Legend 1" },
  { img: bannerImg2, legend: "Legend 2" },
  { img: bannerImg3, legend: "Legend 3" },
  { img: bannerImg4, legend: "Legend 4" },
  { img: bannerImg5, legend: "Legend 5" },
];

// চাইলে এখানে বদলান — কিন্তু 3000-5000ms (৩-৫ সেকেন্ড) recommend করছি
const AUTOPLAY_INTERVAL_MS = 3000;

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  return (
    <div
      className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.img}
              alt={`Banner ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient — legend পড়তে সহজ হওয়ার জন্য */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 text-white text-lg sm:text-2xl font-semibold drop-shadow-lg">
              {slide.legend}
            </p>
          </div>
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      >
        <FaChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-6 bg-teal-400"
                : "w-2 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;