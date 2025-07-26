import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-purple-400 underline' : 'hover:text-purple-300 transition';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black via-[#0e1a2b] to-black-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wide text-white hover:opacity-80 transition">
          WorldAtlas
        </NavLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm md:text-base font-medium text-white">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/country" className={navLinkClass}>Country</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-6 py-4 space-y-4 text-white font-medium">
          <NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>About</NavLink>
          <NavLink to="/country" onClick={toggleMenu} className={navLinkClass}>Country</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={navLinkClass}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;