// import React from "react";
// import { Link } from "react-router";

// const ProductCard = ({ product }) => {
//   const { _id, name, brand, price, images } = product;

//   return (
//     <Link
//       to={`/products/${_id}`}
//       className="group block rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300"
//     >
//       <div className="aspect-square bg-gray-900 overflow-hidden">
//         <img
//           src={images?.[0] || "https://placehold.co/400x400?text=No+Image"}
//           alt={name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>
//       <div className="p-4">
//         <p className="text-xs text-teal-400 uppercase tracking-wide mb-1">
//           {brand}
//         </p>
//         <h3 className="text-white font-medium text-sm mb-2 line-clamp-1">
//           {name}
//         </h3>
//         <p className="text-gray-300 font-semibold">
//           ৳{price?.toLocaleString()}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

// 2
// import React from "react";
// import { Link } from "react-router";
// import { HiSparkles } from "react-icons/hi2";

// const ProductCard = ({ product }) => {
//   const { _id, name, brand, price, images } = product;
//   const imageSrc = images?.[0] || "https://placehold.co/400x400?text=No+Image";

//   return (
//     <div className="relative rounded-3xl bg-gray-900/60 border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center text-center hover:border-teal-400/40 transition-all duration-300 group">
//       {/* Glow behind image, matches reference theme */}
//       <div className="relative w-full h-40 flex items-center justify-center mb-4">
//         <div className="absolute w-32 h-32 bg-teal-400/25 rounded-full blur-3xl group-hover:bg-teal-400/40 transition-all duration-500" />
//         <img
//           src={imageSrc}
//           alt={name}
//           className="relative z-10 max-h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(45,212,191,0.35)] group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Name + price */}
//       <h3 className="text-gray-200 font-semibold text-lg mb-1">{name}</h3>
//       <p className="text-teal-400 font-bold text-xl mb-6">
//         ${price?.toLocaleString()}
//       </p>

//       {/* Two pill buttons — primary (filled) & secondary (outlined) */}
//       <div className="flex gap-3 w-full">
//         <Link
//           to={`/products/${_id}`}
//           className="flex-1 text-center bg-teal-400 text-gray-950 text-sm font-semibold py-3 rounded-full hover:bg-teal-300 transition-colors"
//         >
//           Explore
//         </Link>
//         <Link
//           to={`/products/${_id}#specs`}
//           className="flex-1 text-center border border-teal-400/40 text-teal-400 text-sm font-semibold py-3 rounded-full hover:bg-teal-400/10 transition-colors"
//         >
//           Specs
//         </Link>
//       </div>

//       {/* Decorative sparkle, matches reference corner detail */}
//       <HiSparkles className="absolute bottom-4 right-4 text-white/20 text-lg" />
//     </div>
//   );
// };

// export default ProductCard;

// 3

import React from "react";
import { Link } from "react-router";
import { HiSparkles } from "react-icons/hi2";
import BtnPrimary from "../Button/BtnPrimary";
import BtnSecondary from "../Button/BtnSecondary";

const ProductCard = ({ product }) => {
  const { _id, name, brand, price, images } = product;
  const imageSrc = images?.[0] || "https://placehold.co/400x400?text=No+Image";

  return (
    <div className="relative rounded-3xl bg-gray-900/60 border border-white/10 backdrop-blur-sm p-6 flex flex-col items-center text-center hover:border-teal-400/40 transition-all duration-300 group">
      <div className="relative w-full h-40 flex items-center justify-center mb-4">
        <div className="absolute w-32 h-32 bg-teal-400/25 rounded-full blur-3xl group-hover:bg-teal-400/40 transition-all duration-500" />
        <img
          src={imageSrc}
          alt={name}
          className="relative z-10 max-h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(45,212,191,0.35)] group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-gray-200 font-semibold text-lg mb-1">{name}</h3>
      <p className="text-teal-400 font-bold text-xl mb-6">
        ${price?.toLocaleString()}
      </p>

      {/* <div className="flex gap-3 w-full">
        <BtnPrimary to={`/products/${_id}`}>Explore</BtnPrimary>
        <BtnSecondary to={`/products/${_id}#specs`}>Specs</BtnSecondary>
      </div> */}
      <div className="flex gap-3 justify-center w-full">
        <BtnPrimary to={`/products/${_id}`}>View Details</BtnPrimary>
        {/* <BtnSecondary to={`/products/${_id}#specs`}>Specs</BtnSecondary>  Quick */}
        <BtnSecondary to={`/products/${_id}#specs`}>Specs</BtnSecondary>
      </div>

      <HiSparkles className="absolute bottom-4 right-4 text-white/20 text-lg" />
    </div>
  );
};

export default ProductCard;