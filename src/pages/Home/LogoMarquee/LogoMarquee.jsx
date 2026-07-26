// import React from "react";

// // আপনার প্রজেক্টের লোগো বা ব্যানার ইমেজগুলো এখানে ইমপোর্ট করুন
// import brand1 from "../../../assets/banner-01.jpg";
// import brand2 from "../../../assets/banner-01.jpg";
// import brand3 from "../../../assets/banner-03.jpg";
// import brand4 from "../../../assets/banner-04.jpg";
// import brand5 from "../../../assets/banner-05.jpg";

// const logos = [
//   { id: 1, name: "Apple", img: brand1 },
//   { id: 2, name: "Samsung", img: brand2 },
//   { id: 3, name: "Vivo", img: brand3 },
//   { id: 4, name: "Oppo", img: brand4 },
//   { id: 5, name: "Xiaomi", img: brand5 },
// ];

// const LogoMarquee = () => {
//   return (
//     <section className="py-12 bg-gray-900 border-y border-white/10 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 mb-8">
//         <h2 className="text-center text-gray-400 text-sm uppercase tracking-widest font-semibold">
//           আমাদের বিশ্বস্ত ব্র্যান্ড পার্টনারগণ
//         </h2>
//       </div>

//       {/* Marquee Container with Fade Edges */}
//       <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
//         {/* প্রথম লোগো সেট */}
//         <div className="flex animate-marquee gap-12 py-4 shrink-0 items-center">
//           {logos.map((logo) => (
//             <div
//               key={logo.id}
//               className="flex items-center justify-center h-16 w-36 px-4 bg-white/5 border border-white/10 rounded-xl hover:border-teal-400/50 transition-all duration-300 shrink-0 group"
//             >
//               <img
//                 src={logo.img}
//                 alt={logo.name}
//                 className="max-h-10 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
//               />
//             </div>
//           ))}
//         </div>

//         {/* ইনফিনিট লুপ স্মুথ রাখার জন্য ডুপ্লিকেট সেট */}
//         <div
//           className="flex animate-marquee gap-12 py-4 shrink-0 items-center"
//           aria-hidden="true"
//         >
//           {logos.map((logo) => (
//             <div
//               key={`dup-${logo.id}`}
//               className="flex items-center justify-center h-16 w-36 px-4 bg-white/5 border border-white/10 rounded-xl hover:border-teal-400/50 transition-all duration-300 shrink-0 group"
//             >
//               <img
//                 src={logo.img}
//                 alt={logo.name}
//                 className="max-h-10 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoMarquee;

// 2  index.css

// import React from "react";

// // আপনার প্রজেক্টের লোগো বা ব্যানার ইমেজগুলো এখানে ইমপোর্ট করুন
// import brand1 from "../../../assets/banner-01.jpg";
// import brand2 from "../../../assets/banner-02.jpg"; // আপনার সঠিক পাথ দিয়ে নেবেন
// import brand3 from "../../../assets/banner-03.jpg";
// import brand4 from "../../../assets/banner-04.jpg";
// import brand5 from "../../../assets/banner-05.jpg";

// const logos = [
//   { id: 1, name: "Apple", img: brand1 },
//   { id: 2, name: "Samsung", img: brand2 },
//   { id: 3, name: "Vivo", img: brand3 },
//   { id: 4, name: "Oppo", img: brand4 },
//   { id: 5, name: "Xiaomi", img: brand5 },
// ];

// const LogoMarquee = () => {
//   return (
//     <section className="py-12 bg-gray-900 border-y border-white/10 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 mb-8">
//         <h2 className="text-center text-gray-400 text-sm uppercase tracking-widest font-semibold">
//           Our brand partners
//         </h2>
//       </div>

//       {/* Marquee Container with Fade Edges */}
//       <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
//         {/* প্রথম লোগো সেট */}
//         <div className="flex animate-marquee gap-8 py-4 shrink-0 items-center">
//           {logos.map((logo) => (
//             <div
//               key={logo.id}
//               className="flex flex-col items-center justify-center h-28 w-44 px-4 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-400/50 transition-all duration-300 shrink-0 group"
//             >
//               <img
//                 src={logo.img}
//                 alt={logo.name}
//                 className="max-h-14 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-2"
//               />
//               <span className="text-gray-400 text-xs font-medium tracking-wide group-hover:text-teal-400 transition-colors">
//                 {logo.name}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* ইনফিনিট লুপ স্মুথ রাখার জন্য ডুপ্লিকেট সেট */}
//         <div
//           className="flex animate-marquee gap-8 py-4 shrink-0 items-center"
//           aria-hidden="true"
//         >
//           {logos.map((logo) => (
//             <div
//               key={`dup-${logo.id}`}
//               className="flex flex-col items-center justify-center h-28 w-44 px-4 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-400/50 transition-all duration-300 shrink-0 group"
//             >
//               <img
//                 src={logo.img}
//                 alt={logo.name}
//                 className="max-h-14 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all mb-2"
//               />
//               <span className="text-gray-400 text-xs font-medium tracking-wide group-hover:text-teal-400 transition-colors">
//                 {logo.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LogoMarquee;

// 3 tailwind.config.js

import React from "react";

// আপনার ব্যানার বা লোগো ইমেজগুলো এখানে ইমপোর্ট করুন
import bannerImg1 from "../../../assets/banner-01.jpg";
import bannerImg2 from "../../../assets/banner-02.jpg";
import bannerImg3 from "../../../assets/banner-03.jpg";
import bannerImg4 from "../../../assets/banner-04.jpg";
import bannerImg5 from "../../../assets/banner-05.jpg";

// ব্র্যান্ডের নাম এবং ইমেজ লিস্ট
const brands = [
  { name: "Apple", img: bannerImg1 },
  { name: "Samsung", img: bannerImg2 },
  { name: "Vivo", img: bannerImg3 },
  { name: "Huawei", img: bannerImg4 },
  { name: "Oppo", img: bannerImg5 },
  { name: "Infinix", img: bannerImg1 },
  { name: "Motorola", img: bannerImg2 },
  { name: "Nothing", img: bannerImg3 },
  { name: "Google Pixel", img: bannerImg4 },
  { name: "Tecno", img: bannerImg5 },
  { name: "ZTE/Nubia", img: bannerImg1 },
  { name: "Vercu", img: bannerImg2 },
  { name: "Realme", img: bannerImg3 },
  { name: "Honor", img: bannerImg4 },
  { name: "OnePlus", img: bannerImg5 },
  { name: "Asus", img: bannerImg1 },
  { name: "Xiaomi", img: bannerImg2 },
];

const LogoCard = ({ brand }) => (
  <div className="flex flex-col justify-between items-center h-32 w-44 p-3 bg-white/5 border border-white/10 rounded-2xl hover:border-teal-400/50 hover:bg-teal-400/5 transition-all duration-300 shrink-0 group">
    {/* উপরে বড় লোগো ইমেজ */}
    <div className="flex-1 flex items-center justify-center w-full overflow-hidden my-1">
      <img
        src={brand.img}
        alt={brand.name}
        className="max-h-14 max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
      />
    </div>

    {/* নিচে ফুটারের মতো ব্র্যান্ডের নাম */}
    <div className="w-full pt-2 border-t border-white/5 text-center">
      <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase group-hover:text-teal-400 transition-colors">
        {brand.name}
      </span>
    </div>
  </div>
);

const LogoMarquee = () => {
  return (
    <section className="py-12 bg-gray-900 border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-gray-400 text-sm uppercase tracking-widest font-semibold">
          Our brand partners
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex animate-marquee gap-6 py-4 shrink-0 items-center">
          {brands.map((brand, index) => (
            <LogoCard key={index} brand={brand} />
          ))}
        </div>

        {/* ইনফিনিট লুপ স্মুথ রাখার জন্য ডুপ্লিকেট সেট */}
        <div
          className="flex animate-marquee gap-6 py-4 shrink-0 items-center"
          aria-hidden="true"
        >
          {brands.map((brand, index) => (
            <LogoCard key={`dup-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;