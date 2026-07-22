
// 2          puro foler DELLIT KORBO !!!!!!!!!!!!!!!!!!!!!!!!!
import React from "react";

// আপনার লোগোগুলো এখানে ইমপোর্ট করে নেবেন অথবা সরাসরি পাবলিক ফোল্ডারের পাথ দিতে পারেন
const brands = [
  //   { name: "Apple", logo: "/assets/brands/apple.png" },
  { name: "Apple", logo: "../../../assets/banner-01.jpg" },
  { name: "Samsung", logo: "../../../assets/banner-03.jpg" },
  { name: "Vivo", logo: "../../../assets/banner-04.jpg" },
  { name: "Oppo", logo: "../../../assets/banner-05.jpg" },
  { name: "Xiaomi", logo: "../../../assets/banner-02.jpg" },
  // আপনার বাকি ব্র্যান্ডগুলো এভাবে যোগ করবেন
];

const BrandStrip = () => {
  return (
    <section className="py-10 bg-gray-950 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-center text-gray-400 text-sm uppercase tracking-widest">
          Our brand partners
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* প্রথম সেট লোগো */}
        <div className="flex animate-marquee gap-8 py-2 shrink-0 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/50 transition-colors shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
              />
              <span className="text-gray-300 text-sm font-medium">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* লুপ স্মুথ রাখার জন্য দ্বিতীয় ডুপ্লিকেট সেট */}
        <div
          className="flex animate-marquee gap-8 py-2 shrink-0 items-center"
          aria-hidden="true"
        >
          {brands.map((brand, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal-400/50 transition-colors shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-6 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
              />
              <span className="text-gray-300 text-sm font-medium">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;