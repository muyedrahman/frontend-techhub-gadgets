// import React from "react";
// import { Link } from "react-router";

// /**
//  * Reusable secondary button — outlined teal, pill shape
//  * Usage as a link: <BtnSecondary to="/products/123#specs">Specs</BtnSecondary>
//  * Usage as a click handler: <BtnSecondary onClick={handleCancel}>Cancel</BtnSecondary>
//  */
// const BtnSecondary = ({
//   children,
//   to,
//   onClick,
//   type = "button",
//   className = "",
// }) => {
//   const baseStyle =
//     "flex-1 text-center border border-teal-400/40 text-teal-400 text-sm font-semibold py-3 rounded-full hover:bg-teal-400/10 transition-colors";

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

// export default BtnSecondary;

// 2
import React from "react";
import { Link } from "react-router";

const BtnSecondary = ({
  children,
  to,
  onClick,
  type = "button",
  className = "",
}) => {
  const baseStyle =
    "text-center border border-teal-400/40 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full hover:bg-teal-400/10 transition-colors";

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

export default BtnSecondary;