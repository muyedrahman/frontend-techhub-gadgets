import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import api from "../../services/api";
import BtnSecondary from "../../components/Button/BtnSecondary";
import BtnPrimary from "../../components/Button/BtnPrimary";
import ProductDetailsSkeleton from "../../components/Skeleton/ProductDetailsSkeleton";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Product details fetch error:", err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <ProductDetailsSkeleton />
  }

{/* <div className="min-h-screen bg-gray-950 flex items-center justify-center">
  <p className="text-gray-400 text-sm">Loading product...</p>
</div>; */}

  if (notFound || !product) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-300 text-lg">Product not found.</p>
        {/* <Link to="/products" className="text-teal-400 text-sm hover:underline">
          ← Back to All Products
        </Link> */}
        <BtnPrimary
          to="/products"
          className="text-teal-400 text-sm hover:underline"
        >
          ← Back to All Products
        </BtnPrimary>
      </div>
    );
  }

  // const {
  //   name,
  //   brand,
  //   type,
  //   price,
  //   images,
  //   specs,
  //   shortDescription,
  //   fullDescription,
  //   releaseYear,
  // } = product;

  const {
    name,
    brand,
    type,
    price,
    images,
    specs,
    shortDescription,
    fullDescription,
    releaseYear,
    seoTitle,
    metaDescription,
  } = product;

  const imageSrc = images?.[0] || "https://placehold.co/600x600?text=No+Image";
  const specEntries = specs ? Object.entries(specs) : [];

  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <Helmet>
        <title>{seoTitle || `${name} - TechHub`}</title>
        <meta
          name="description"
          content={
            metaDescription ||
            shortDescription ||
            `${name} specifications and details on TechHub`
          }
        />
        <meta property="og:title" content={seoTitle || name} />
        <meta
          property="og:description"
          content={metaDescription || shortDescription}
        />
        <meta property="og:image" content={imageSrc} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        {/* <Link
          to="/products"
          className="inline-block text-sm text-gray-400 hover:text-teal-400 mb-8 transition-colors"
        >
          ← Back to All Products
        </Link> */}
        <BtnPrimary
          to="/products"
          className="inline-block text-sm text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to All Products
        </BtnPrimary>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: image with glow, matches ProductCard theme */}
          <div className="relative rounded-3xl bg-gray-900/60 border border-white/10 p-10 flex items-center justify-center">
            <div className="absolute w-48 h-48 bg-teal-400/25 rounded-full blur-3xl" />
            <img
              src={imageSrc}
              alt={name}
              className="relative z-10 max-h-80 w-auto object-contain drop-shadow-[0_0_35px_rgba(45,212,191,0.35)]"
            />
          </div>

          {/* Right: name, brand, price, short description */}
          <div className="flex flex-col justify-center">
            <p className="text-teal-400 text-sm uppercase tracking-wide mb-2">
              {brand} · {type}
            </p>
            <h1 className="text-3xl font-bold text-white mb-3">{name}</h1>
            <p className="text-teal-400 font-bold text-2xl mb-4">
              ${price?.toLocaleString()}
            </p>

            {shortDescription && (
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {shortDescription}
              </p>
            )}

            {releaseYear && (
              <p className="text-gray-500 text-xs mb-6">
                Released in {releaseYear}
              </p>
            )}

            <div className="flex gap-3">
              <BtnSecondary
                onClick={() =>
                  window.scrollTo({ top: 800, behavior: "smooth" })
                }
              >
                Jump to Specs
              </BtnSecondary>
            </div>
          </div>
        </div>

        {/* Full spec table */}
        <div id="specs" className="mt-14 scroll-mt-20">
          <h2 className="text-xl font-bold text-white mb-5">
            Full <span className="text-teal-400">Specifications</span>
          </h2>

          {specEntries.length === 0 ? (
            <p className="text-gray-400 text-sm">
              No detailed specifications available yet.
            </p>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              {specEntries.map(([key, value], idx) => (
                <div
                  key={key}
                  className={`flex justify-between px-5 py-3 text-sm ${
                    idx % 2 === 1 ? "bg-white/5" : ""
                  }`}
                >
                  <span className="text-gray-400 capitalize">{key}</span>
                  <span className="text-gray-200 font-medium">{value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Full description */}
        {fullDescription && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-white mb-3">Description</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {fullDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
