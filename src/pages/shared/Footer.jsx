// import React from 'react';

// const Footer = () => {
//     return (
//       <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
//         <nav>
//           <h6 className="footer-title">Services</h6>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Company</h6>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Terms of use</a>
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Cookie policy</a>
//         </nav>
//         <form>
//           <h6 className="footer-title">Newsletter</h6>
//           <fieldset className="w-80">
//             <label>Enter your email address</label>
//             <div className="join">
//               <input
//                 type="text"
//                 placeholder="username@site.com"
//                 className="input input-bordered join-item"
//               />
//               <button className="btn btn-primary join-item">Subscribe</button>
//             </div>
//           </fieldset>
//         </form>
//       </footer>
//     );
// };

// export default Footer;

// 1

import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaMicrochip,
  FaEnvelope,
} from "react-icons/fa";

const brands = [
  "Apple",
  "Samsung",
  "Vivo",
  "Huawei",
  "Oppo",
  "Infinix",
  "Motorola",
  "Nothing",
  "Google Pixel",
  "Tecno",
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaMicrochip className="text-teal-400 text-xl" />
              <span className="text-lg font-bold text-white">
                Tech<span className="text-teal-400">Hub</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Reliable specifications for mobile phones, laptops, watches, and
              tablets, all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-teal-400 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Popular Brands
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    to={`/products?brand=${encodeURIComponent(brand)}`}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              Connect
            </h4>

            <a
              href="mailto:contact@techhub.com"
              className="flex items-center gap-2 text-sm hover:text-teal-400 transition-colors mb-4"
            >
              <FaEnvelope /> contact@techhub.com
            </a>

            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, url: "#" },
                { Icon: FaInstagram, url: "#" },
                { Icon: FaLinkedinIn, url: "#" },
                { Icon: FaGithub, url: "#" },
              ].map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-teal-400/10 hover:border-teal-400/40 hover:text-teal-400 transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} TechHub. All rights reserved.</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div> */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>&copy; {new Date().getFullYear()} TechHub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Built with Muyedur &amp; Rahman</p>
            <Link
              to="/admin/login"
              className="text-gray-500 hover:text-teal-400 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;