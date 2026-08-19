import React from "react";

// পুরো পেজ জুড়ে দেখানোর জন্য loading spinner
const Spinner = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-teal-400/20 border-t-teal-400 rounded-full animate-spin" />
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
