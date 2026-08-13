import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="h-4 w-32 rounded bg-white/10 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-white/5 border border-white/10 h-80" />
          <div className="flex flex-col justify-center gap-4">
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="h-8 w-2/3 rounded bg-white/10" />
            <div className="h-6 w-1/3 rounded bg-white/10" />
            <div className="h-16 w-full rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
