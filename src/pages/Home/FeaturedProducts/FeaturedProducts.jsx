// import React from "react";
// import ProductCard from "../product/ProductCard";

// // TODO: backend তৈরি হলে এই dummy array বাদ দিয়ে API থেকে ফিচার্ড প্রোডাক্ট fetch করতে হবে
// const dummyProducts = [
//   {
//     _id: "1",
//     name: "iPhone 15 Pro",
//     brand: "Apple",
//     price: 145000,
//     images: ["/assets/dummy/iphone15.jpg"],
//   },
//   {
//     _id: "2",
//     name: "Galaxy S24 Ultra",
//     brand: "Samsung",
//     price: 132000,
//     images: ["/assets/dummy/s24.jpg"],
//   },
//   {
//     _id: "3",
//     name: "MacBook Air M3",
//     brand: "Apple",
//     price: 168000,
//     images: ["/assets/dummy/macbook.jpg"],
//   },
//   {
//     _id: "4",
//     name: "Pixel 8 Pro",
//     brand: "Google Pixel",
//     price: 98000,
//     images: ["/assets/dummy/pixel8.jpg"],
//   },
// ];

// const FeaturedProducts = () => {
//   return (
//     <section className="py-16 bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white">
//             Featured <span className="text-teal-400">Products</span>
//           </h2>
//           <a href="/products" className="text-sm text-teal-400 hover:underline">
//             সব দেখুন →
//           </a>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
//           {dummyProducts.map((p) => (
//             <ProductCard key={p._id} product={p} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;

// 2

// import { useEffect, useState } from "react";
// import ProductCard from "../../../components/ProductCard/ProductCard";
// import api from "../../../services/api";
// // import api from "../../services/api";

// const FeaturedProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     api
//       .get("/products")
//       .then((res) => setProducts(res.data.products))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section className="py-16 bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white">
//             Featured <span className="text-teal-400">Products</span>
//           </h2>
//           <a href="/products" className="text-sm text-teal-400 hover:underline">
//             সব দেখুন →
//           </a>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
//           {products.map((p) => (
//             <ProductCard key={p._id} product={p} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;

// 3
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import api from "../../../services/api";
import BtnPrimary from "../../../components/Button/BtnPrimary";
import ProductGridSkeleton from "../../../components/Skeleton/ProductGridSkeleton";

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
        {/* <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Featured <span className="text-teal-400">Products</span>
          </h2>
          <BtnPrimary className="">View All</BtnPrimary>
           <a href="/products" className="text-sm text-teal-400 hover:underline">
            View All →
          </a> 
        </div> */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Featured <span className="text-teal-400">Products</span>
          </h2>
          <BtnPrimary to="/products">View All</BtnPrimary>
        </div>

        {loading ? (
          // <p className="text-gray-400 text-sm">Loading...</p>
          <ProductGridSkeleton count={4} />
        ) : products.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No products have been added yet.
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