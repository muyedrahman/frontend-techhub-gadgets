// import React from "react";
// import { Link } from "react-router";

// /**
//  * Reusable primary button — filled teal, pill shape
//  * Usage as a link: <BtnPrimary to="/products">Explore</BtnPrimary>
//  * Usage as a click handler: <BtnPrimary onClick={handleClick}>Save</BtnPrimary>
//  */
// const BtnPrimary = ({
//   children,
//   to,
//   onClick,
//   type = "button",
//   className = "",
// }) => {
//   const baseStyle =
//     "flex-1 text-center bg-teal-400 text-gray-950 text-sm font-semibold py-3 rounded-full hover:bg-teal-300 transition-colors";

//   if (to) {
//     return (
//       <Link to={to} className={`${baseStyle} ${className}`}>
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${baseStyle} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default BtnPrimary;

import React from "react";
import { Link } from "react-router";

const BtnPrimary = ({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyle =
    "text-center bg-teal-400 text-gray-950 text-xs font-semibold px-4 py-2 rounded-full hover:bg-teal-300 transition-colors";

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;