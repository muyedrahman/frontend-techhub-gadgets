import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../services/api";
import BtnPrimary from "../../../components/Button/BtnPrimary";
import BtnSecondary from "../../../components/Button/BtnSecondary";

const Dashboard = () => {
  const { logout } = useAuth();

  const [totalProducts, setTotalProducts] = useState(0);
  const [brandCounts, setBrandCounts] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch everything needed for the dashboard in parallel
    Promise.all([
      api.get("/products", { params: { page: 1 } }),
      api.get("/products/brands-with-types"),
    ])
      .then(([productsRes, brandsRes]) => {
        setTotalProducts(
          productsRes.data.total,
          //   productsRes.data.totalPages > 0
          //     ? productsRes.data.products.length
          //     : 0,
        );
        setRecentProducts(productsRes.data.products.slice(0, 5));
        setBrandCounts(brandsRes.data);
      })
      .catch((err) => console.error("Dashboard fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          {/* <h1 className="text-2xl font-bold text-white">
            Admin <span className="text-teal-400">Dashboard</span>
          </h1> */}
          <h1 className="text-2xl font-bold text-white mb-8">
            Admin <span className="text-teal-400">Dashboard</span>
          </h1>
          <BtnSecondary onClick={logout}>Logout</BtnSecondary>
        </div>

        {loading ? (
          <p className="text-gray-400 text-sm">Loading dashboard...</p>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
                  Brands with Products
                </p>
                <p className="text-3xl font-bold text-teal-400">
                  {brandCounts.length}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  out of 17 total brands
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
                  Recent Products Loaded
                </p>
                <p className="text-3xl font-bold text-teal-400">
                  {recentProducts.length}
                </p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-3 mb-10">
              <BtnPrimary to="/admin/products/add">Add New Product</BtnPrimary>
              <BtnSecondary to="/admin/products/manage">
                Manage Products
              </BtnSecondary>
            </div>

            {/* Brand breakdown */}
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-white mb-4">
                Products by Brand
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                {brandCounts.map((b, idx) => (
                  <div
                    key={b._id}
                    className={`flex justify-between px-5 py-3 text-sm ${
                      idx % 2 === 1 ? "bg-white/5" : ""
                    }`}
                  >
                    <span className="text-gray-300">{b._id}</span>
                    <span className="text-teal-400 font-medium">
                      {b.types.length} type(s)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent products */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-4">
                Recently Added
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                {recentProducts.map((p, idx) => (
                  <div
                    key={p._id}
                    className={`flex justify-between px-5 py-3 text-sm ${
                      idx % 2 === 1 ? "bg-white/5" : ""
                    }`}
                  >
                    <span className="text-gray-300">{p.name}</span>
                    <span className="text-gray-500">{p.brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
