import React from "react";
// import { Link } from "react-router";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
import BtnPrimary from "../../components/Button/BtnPrimary";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-3xl" />
        <HiOutlineExclamationCircle className="relative z-10 text-teal-400 text-7xl" />
      </div>
      <h1 className="text-5xl font-bold text-white mb-3">404</h1>
      <p className="text-gray-400 text-sm mb-8 max-w-sm">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <BtnPrimary to="/">Back to Home</BtnPrimary>
    </div>
  );
};

export default NotFound;
