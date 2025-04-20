import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

function Navbar1() {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      
      {/* Left side: Hamburger for mobile or menu links for desktop */}
      <div className="flex items-center gap-6">
        <button 
          className="text-2xl md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links for desktop */}
        <div className="hidden md:flex gap-8 text-gray-700 text-base">
          <Link to="/home" className="hover:text-green-600">Home</Link>

          <Link to="/checkout" className="hover:text-green-600">CheckOut</Link>
          <Link to="/wishlist" className="hover:text-green-600">Wishlist</Link>
          <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
        </div>
      </div>

      {/* Middle: Logo & Name */}
      <div className="flex items-center gap-3">
        <img src="image1.png" alt="EcoXchange Logo" className="h-10 w-10 object-cover" />
        <p className="text-xl font-semibold text-green-700">EcoXchange</p>
      </div>

      {/* Right: Icons */}
      <div className="flex gap-5 items-center text-gray-700 text-lg">
        {showSearch ? (
          <input
            type="text"
            placeholder="Search..."
            className="border-b-2 outline-none px-2 py-1"
            onBlur={() => setShowSearch(false)}
            autoFocus
          />
        ) : (
          <button onClick={() => setShowSearch(true)} className="hover:text-green-600">
            <FaSearch />
          </button>
        )}

        <Link to="/wishlist" className="hover:text-green-600"><FaHeart /></Link>
        <Link to="/cart" className="hover:text-green-600"><FaShoppingCart /></Link>
        <Link to="/messages" className="hover:text-green-600"><FaEnvelope /></Link>
      </div>

      {/* Mobile Menu: visible when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col gap-4 text-center text-gray-700 z-50 md:hidden">
          <Link to="/home" className="hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/category" className="hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Category</Link>
          <Link to="/blog" className="hover:text-green-600" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/aboutus" className="hover:text-green-600" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar1;
