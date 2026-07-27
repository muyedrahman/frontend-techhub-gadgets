import React from "react";

const TYPE_LABELS = {
  mobile: "Mobile",
  laptop: "Laptop",
  tablet: "Tablet",
  watch: "Watch",
  "mac-mini": "Mac Mini",
};

const FilterPanel = ({
  brandsWithTypes,
  selectedBrand,
  selectedType,
  onBrandChange,
  onTypeChange,
  onClear,
}) => {
  // If a brand is selected, only show types that actually exist for that brand.
  // Otherwise, show every type that exists across all brands.
  const availableTypes = selectedBrand
    ? brandsWithTypes.find((b) => b._id === selectedBrand)?.types || []
    : [...new Set(brandsWithTypes.flatMap((b) => b.types))];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
          Filter
        </h3>
        {(selectedBrand || selectedType) && (
          <button
            onClick={onClear}
            className="text-xs text-teal-400 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mb-5">
        <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
          Brand
        </p>
        <div className="flex flex-wrap gap-2">
          {brandsWithTypes.map((b) => (
            <button
              key={b._id}
              onClick={() =>
                onBrandChange(selectedBrand === b._id ? "" : b._id)
              }
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                selectedBrand === b._id
                  ? "bg-teal-400 text-gray-950 border-teal-400"
                  : "border-white/10 text-gray-300 hover:border-teal-400/40"
              }`}
            >
              {b._id}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
          Device Type
        </p>
        <div className="flex flex-wrap gap-2">
          {availableTypes.map((t) => (
            <button
              key={t}
              onClick={() => onTypeChange(selectedType === t ? "" : t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                selectedType === t
                  ? "bg-teal-400 text-gray-950 border-teal-400"
                  : "border-white/10 text-gray-300 hover:border-teal-400/40"
              }`}
            >
              {TYPE_LABELS[t] || t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
