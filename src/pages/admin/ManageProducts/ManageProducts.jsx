import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { auth } from "../../../services/firebase";
import api from "../../../services/api";
import BtnSecondary from "../../../components/Button/BtnSecondary";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");

  const fetchProducts = () => {
    setLoading(true);
    api
      .get("/products", { params: { page: 1 } })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id, name) => {
    const confirmed = window.confirm(
      `Delete "${name}"? This cannot be undone.`,
    );
    if (!confirmed) return;

    setError("");
    setDeletingId(id);

    try {
      const token = await auth.currentUser.getIdToken();
      await api.delete(`/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      setError("Failed to delete product.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">
          Manage <span className="text-teal-400">Products</span>
        </h1>
        <BtnSecondary to="/admin/products/add">+ Add New</BtnSecondary>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {loading ? (
        <p className="text-gray-400 text-sm">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-400 text-sm">No products found.</p>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-5 py-3 text-xs text-gray-500 uppercase tracking-wide border-b border-white/10">
            <span>Product</span>
            <span>Brand</span>
            <span>Price</span>
            <span>Actions</span>
          </div>

          {products.map((p, idx) => (
            <div
              key={p._id}
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-4 items-center px-5 py-3 text-sm ${
                idx % 2 === 1 ? "bg-white/5" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={p.images?.[0] || "https://placehold.co/40x40?text=?"}
                  alt={p.name}
                  className="w-10 h-10 rounded-lg object-cover border border-white/10"
                />
                <span className="text-gray-200 font-medium">{p.name}</span>
              </div>
              <span className="text-gray-400">{p.brand}</span>
              <span className="text-teal-400 font-medium">
                ${p.price?.toLocaleString()}
              </span>
              <div className="flex gap-2">
                <Link
                  to={`/admin/products/edit/${p._id}`}
                  className="text-xs text-teal-400 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(p._id, p.name)}
                  disabled={deletingId === p._id}
                  className="text-xs text-red-400 hover:underline disabled:opacity-50"
                >
                  {deletingId === p._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
