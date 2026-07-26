import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import api from "../../services/api";



const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Product fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Featured <span className="text-teal-400">Products</span>
          </h2>
          <a href="/products" className="text-sm text-teal-400 hover:underline">
            সব দেখুন →
          </a>
        </div>

        {loading ? (
          <p className="text-gray-400 text-sm">লোড হচ্ছে...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-400 text-sm">
            এখনো কোনো প্রোডাক্ট যোগ করা হয়নি।
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
