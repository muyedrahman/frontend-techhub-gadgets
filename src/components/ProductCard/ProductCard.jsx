import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, name, brand, price, images } = product;

  return (
    <Link
      to={`/products/${_id}`}
      className="group block rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/10 transition-all duration-300"
    >
      <div className="aspect-square bg-gray-900 overflow-hidden">
        <img
          src={images?.[0] || "https://placehold.co/400x400?text=No+Image"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-teal-400 uppercase tracking-wide mb-1">
          {brand}
        </p>
        <h3 className="text-white font-medium text-sm mb-2 line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-300 font-semibold">
          ৳{price?.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
