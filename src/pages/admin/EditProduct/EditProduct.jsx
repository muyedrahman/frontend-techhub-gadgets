import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { auth } from "../../../services/firebase";
import api from "../../../services/api";
import { uploadToImgBB } from "../../../services/imgbb";
import { BRANDS } from "../../../constants/brandConstants";
import BtnPrimary from "../../../components/Button/BtnPrimary";
import BtnSecondary from "../../../components/Button/BtnSecondary";

const TYPES = ["mobile", "laptop", "tablet", "watch", "mac-mini"];

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);

  const [existingImage, setExistingImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Load the existing product and pre-fill the form
  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        const p = res.data;
        setName(p.name || "");
        setBrand(p.brand || "");
        setType(p.type || "");
        setPrice(p.price || "");
        setShortDescription(p.shortDescription || "");
        setFullDescription(p.fullDescription || "");
        setReleaseYear(p.releaseYear || "");
        setExistingImage(p.images?.[0] || "");

        const specEntries = p.specs ? Object.entries(p.specs) : [];
        setSpecs(
          specEntries.length > 0
            ? specEntries.map(([key, value]) => ({ key, value }))
            : [{ key: "", value: "" }],
        );
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSpecChange = (index, field, value) => {
    const updated = [...specs];
    updated[index][field] = value;
    setSpecs(updated);
  };

  const addSpecRow = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };

  const removeSpecRow = (index) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !brand || !type || !price) {
      setError("Name, brand, type, and price are required.");
      return;
    }

    try {
      // Only re-upload if the admin selected a new image; otherwise keep the existing URL
      let imageUrl = existingImage;
      if (imageFile) {
        setUploading(true);
        imageUrl = await uploadToImgBB(imageFile);
        setUploading(false);
      }

      const specsObject = specs.reduce((acc, item) => {
        if (item.key.trim()) acc[item.key.trim()] = item.value;
        return acc;
      }, {});

      setSubmitting(true);
      const token = await auth.currentUser.getIdToken();

      await api.put(
        `/products/${id}`,
        {
          name,
          brand,
          type,
          price: Number(price),
          images: imageUrl ? [imageUrl] : [],
          specs: specsObject,
          shortDescription,
          fullDescription,
          releaseYear: releaseYear ? Number(releaseYear) : null,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setSuccess(true);
      setTimeout(() => navigate("/admin/products/manage"), 1200);
    } catch (err) {
      console.error("Edit product error:", err);
      setError(err.response?.data?.message || "Failed to update product.");
    } finally {
      setUploading(false);
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-gray-400 text-sm">Loading product...</p>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="text-gray-300">Product not found.</p>
        <BtnSecondary to="/admin/products/manage" className="mt-4">
          Back to Manage Products
        </BtnSecondary>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-white mb-8">
        Edit <span className="text-teal-400">Product</span>
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Image */}
        <div>
          <label className="block text-xs text-gray-400 mb-2">
            Product Image
          </label>
          <div className="flex items-center gap-4">
            <img
              src={
                imagePreview ||
                existingImage ||
                "https://placehold.co/80x80?text=No+Image"
              }
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-white/10"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-teal-400/10 file:text-teal-400 file:text-sm"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Leave empty to keep the current image.
          </p>
        </div>

        {/* Basic fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Price (USD)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Brand</label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
            >
              <option value="" className="bg-gray-900">
                Select a brand
              </option>
              {BRANDS.map((b) => (
                <option key={b} value={b} className="bg-gray-900">
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Device Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
            >
              <option value="" className="bg-gray-900">
                Select a type
              </option>
              {TYPES.map((t) => (
                <option key={t} value={t} className="bg-gray-900">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">
              Release Year
            </label>
            <input
              type="number"
              value={releaseYear}
              onChange={(e) => setReleaseYear(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
            />
          </div>
        </div>

        {/* Descriptions */}
        <div>
          <label className="block text-xs text-gray-400 mb-1">
            Short Description
          </label>
          <input
            type="text"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-1">
            Full Description
          </label>
          <textarea
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60 resize-none"
          />
        </div>

        {/* Specs */}
        <div>
          <label className="block text-xs text-gray-400 mb-2">
            Specifications
          </label>
          <div className="flex flex-col gap-2">
            {specs.map((spec, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  type="text"
                  value={spec.key}
                  onChange={(e) => handleSpecChange(idx, "key", e.target.value)}
                  placeholder="e.g. ram"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
                />
                <input
                  type="text"
                  value={spec.value}
                  onChange={(e) =>
                    handleSpecChange(idx, "value", e.target.value)
                  }
                  placeholder="e.g. 8GB"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-teal-400/60"
                />
                {specs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSpecRow(idx)}
                    className="px-3 text-gray-500 hover:text-red-400 text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addSpecRow}
            className="mt-2 text-xs text-teal-400 hover:underline"
          >
            + Add another spec
          </button>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}
        {success && (
          <p className="text-teal-400 text-sm">Product updated successfully!</p>
        )}

        <div className="flex gap-3 mt-2">
          <BtnPrimary type="submit">
            {uploading
              ? "Uploading image..."
              : submitting
                ? "Saving..."
                : "Save Changes"}
          </BtnPrimary>
          <BtnSecondary to="/admin/products/manage">Cancel</BtnSecondary>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
