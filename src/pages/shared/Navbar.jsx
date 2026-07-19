// import React from 'react';

// const Navbar = () => {
//     return (
//       <div className="navbar bg-base-100 shadow-sm">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h7"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <a>Homepage</a>
//               </li>
//               <li>
//                 <a>Portfolio</a>
//               </li>
//               <li>
//                 <a>About</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="navbar-center">
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-end">
//           <button className="btn btn-ghost btn-circle">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//           <button className="btn btn-ghost btn-circle">
//             <div className="indicator">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >

//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                 />{" "}
//               </svg>
//               <span className="badge badge-xs badge-primary indicator-item"></span>
//             </div>
//           </button>
//         </div>
//       </div>
//     );
// };

// export default Navbar;

// 1
import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaSearch, FaBars, FaTimes, FaMicrochip } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "All Products", path: "/products" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-teal-400" : "text-gray-300 hover:text-teal-300"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <FaMicrochip className="text-teal-400 text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-wide text-white">
              Tech<span className="text-teal-400">Hub</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {({ isActive }) => (
                  <span className="pb-1">
                    {link.name}
                    <span
                      className={`block h-[2px] bg-teal-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right side: Search + Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Search - desktop */}
            <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1.5 focus-within:border-teal-400/60 transition-colors">
              <FaSearch className="text-gray-400 text-sm mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-40 lg:w-56"
              />
            </div>

            {/* Search icon - mobile */}
            <button
              className="sm:hidden text-gray-300 hover:text-teal-400"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-label="Toggle search"
            >
              <FaSearch size={18} />
            </button>

            {/* Hamburger - mobile */}
            <button
              className="md:hidden text-gray-300 hover:text-teal-400"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="sm:hidden pb-3">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-2">
              <FaSearch className="text-gray-400 text-sm mr-2" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm text-white placeholder-gray-500 w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-teal-400/10 text-teal-400"
                    : "text-gray-300 hover:bg-white/5"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;