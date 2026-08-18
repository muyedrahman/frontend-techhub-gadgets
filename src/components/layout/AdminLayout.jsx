import React from "react";
import { NavLink, Outlet } from "react-router";
import {
  HiOutlineViewGrid,
  HiOutlinePlusCircle,
  HiOutlineCollection,
  HiOutlineLogout,
} from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: HiOutlineViewGrid },
  {
    name: "Add Product",
    path: "/admin/products/add",
    icon: HiOutlinePlusCircle,
  },
  {
    name: "Manage Products",
    path: "/admin/products/manage",
    icon: HiOutlineCollection,
  },
];

const AdminLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900/60 border-r border-white/10 flex flex-col shrink-0">
        <div className="px-6 py-6 border-b border-white/10">
          <p className="text-lg font-bold text-white">
            Tech<span className="text-teal-400">Hub</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-teal-400/10 text-teal-400"
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                }`
              }
            >
              <Icon className="text-lg" />
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-6 border-t border-white/10">
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-red-400 transition-colors w-full"
          >
            <HiOutlineLogout className="text-lg" />
            Logout
          </button>
        </div>
      </aside>

      {/* Page content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
