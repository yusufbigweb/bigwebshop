import React, { useState } from "react";
import { Link } from "react-router";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LEFT: MENU (MOBILE) + LOGO */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-2xl"
            >
           <MdMenu />

            </button>

            <Link to="/" className="font-bold text-lg">
              @bigwebyusuf - Ecommerce
            </Link>
          </div>

          {/* CENTER: NAV LINKS + SEARCH (DESKTOP/TABLET) */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>

            {/* INLINE SEARCH */}
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full w-[260px]">
              <IoIosSearch className="opacity-50" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* RIGHT: USER + CART */}
          <div className="flex items-center gap-3">
            <Link to="/login" className="border p-2 rounded-md">
              <FaRegUser />
            </Link>
            <Link to="/card" className="border p-2 rounded-md">
              <FiShoppingCart />
            </Link>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDE MENU (MOBILE) */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">@bigwebyusuf</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <HiX />
          </button>
        </div>

        {/* SEARCH INSIDE MENU */}
        <div className="p-4">
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
            <IoIosSearch className="opacity-50" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
