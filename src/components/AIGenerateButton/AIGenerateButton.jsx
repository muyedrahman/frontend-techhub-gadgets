import React, { useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { authedApi } from "../../services/api";
import { useToast } from "../../context/ToastContext";

/**
 * Reusable "Generate with AI" বাটন।
 * props:
 * - endpoint: কোন AI route কল হবে (e.g. "/ai/generate-seo")
 * - payload: প্রোডাক্টের যে data পাঠাতে হবে (name, brand, type ইত্যাদি)
 * - onResult: response এলে কী করতে হবে (parent component ফর্ম fields বসাবে)
 * - label: বাটনের টেক্সট
 */
const AIGenerateButton = ({
  endpoint,
  payload,
  onResult,
  label = "Generate with AI",
}) => {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleClick = async () => {
    if (!payload.name || !payload.brand) {
      showToast("Please fill in product name and brand first.", "error");
      return;
    }

    setLoading(true);
    try {
      const client = await authedApi();
      const res = await client.post(endpoint, payload);
      onResult(res.data);
      showToast("Generated successfully!", "success");
    } catch (err) {
      console.error("AI generate error:", err);
      showToast(err.response?.data?.message || "Generation failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <HiSparkles className={loading ? "animate-pulse" : ""} />
      {loading ? "Generating..." : label}
    </button>
  );
};

export default AIGenerateButton;
