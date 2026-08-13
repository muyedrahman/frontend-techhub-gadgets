import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="rounded-3xl bg-gray-900/60 border border-white/10 p-6 flex flex-col items-center animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-40 rounded-xl bg-white/10 mb-4" />

      {/* Name placeholder */}
      <div className="h-4 w-3/4 rounded bg-white/10 mb-2" />

      {/* Price placeholder */}
      <div className="h-5 w-1/3 rounded bg-white/10 mb-6" />

      {/* Buttons placeholder */}
      <div className="flex gap-3 w-full justify-center">
        <div className="h-8 w-20 rounded-full bg-white/10" />
        <div className="h-8 w-20 rounded-full bg-white/10" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
