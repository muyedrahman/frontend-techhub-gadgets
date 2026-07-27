import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Pagination from "../../components/Pagination/Pagination";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [brandsWithTypes, setBrandsWithTypes] = useState([]);

  const search = searchParams.get("search") || "";
  const brand = searchParams.get("brand") || "";
  const type = searchParams.get("type") || "";
  const page = Number(searchParams.get("page")) || 1;

  const [searchInput, setSearchInput] = useState(search);

  // Fetch the brand -> type list once, used to build the filter panel
  useEffect(() => {
    api
      .get("/products/brands-with-types")
      .then((res) => setBrandsWithTypes(res.data))
      .catch((err) => console.error("Brand list fetch error:", err));
  }, []);

  // Debounce the search input before pushing it into the URL
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        updateParams({ search: searchInput, page: 1 });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Fetch products whenever any filter or the page changes
  useEffect(() => {
    setLoading(true);
    api
      .get("/products", { params: { search, brand, type, page } })
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => console.error("Product fetch error:", err))
      .finally(() => setLoading(false));
  }, [search, brand, type, page]);

  const updateParams = (updates) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
    });
    setSearchParams(next);
  };

  const handleBrandChange = (newBrand) => {
    // Reset type when the brand changes, since available types depend on the brand
    updateParams({ brand: newBrand, type: "", page: 1 });
  };

  const handleTypeChange = (newType) => {
    updateParams({ type: newType, page: 1 });
  };

  const handleClearFilters = () => {
    setSearchInput("");
    setSearchParams({});
  };

  const handlePageChange = (newPage) => {
    updateParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          All <span className="text-teal-400">Products</span>
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Browse mobiles, laptops, watches, and tablets from 17 brands.
        </p>

        <div className="mb-8 max-w-md">
          <SearchBar value={searchInput} onChange={setSearchInput} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside>
            <FilterPanel
              brandsWithTypes={brandsWithTypes}
              selectedBrand={brand}
              selectedType={type}
              onBrandChange={handleBrandChange}
              onTypeChange={handleTypeChange}
              onClear={handleClearFilters}
            />
          </aside>

          <main>
            {loading ? (
              <p className="text-gray-400 text-sm">Loading products...</p>
            ) : products.length === 0 ? (
              <p className="text-gray-400 text-sm">
                No products match your search or filter.
              </p>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                  {products.map((p) => (
                    <ProductCard key={p._id} product={p} />
                  ))}
                </div>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
