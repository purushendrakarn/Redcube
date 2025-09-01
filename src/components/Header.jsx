import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full flex justify-between items-center py-4 px-4 lg:px-20 bg-black text-white relative z-50">
      {/* Logo */}
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff1e1e] via-[#ff4d4d] to-[#b30000] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,0,0,0.6)] tracking-wide flex items-center gap-1">
        Red
        <sup className="text-2xl md:text-3xl font-extrabold bg-gradient-to-t from-yellow-400 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse">
          3
        </sup>
        Agency
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link to="/Hero" className="text-base font-medium uppercase tracking-wide hover:text-yellow-300 transition-colors duration-300">
          Home
        </Link>
        <Link to="/pricing" className="text-base font-medium uppercase tracking-wide hover:text-yellow-300 transition-colors duration-300">
          Pricing
        </Link>
        <Link to="/projects" className="text-base font-medium uppercase tracking-wide hover:text-yellow-300 transition-colors duration-300">
          Projects
        </Link>
        <Link to="/testimonials" className="text-base font-medium uppercase tracking-wide hover:text-yellow-300 transition-colors duration-300">
          Testimonials
        </Link>
      </nav>

      {/* Desktop Contact Button */}
      <Link
        to="/contact"
        className="hidden md:inline-block bg-[#a7a7a7] text-black py-2 px-6 rounded-full font-medium transition-all duration-300 hover:bg-white"
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2">
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden z-40">
          <Link
            to="/Hero"
            className="text-lg font-semibold uppercase tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="text-lg font-semibold uppercase tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            to="/projects"
            className="text-lg font-semibold uppercase tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/testimonials"
            className="text-lg font-semibold uppercase tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold uppercase tracking-wide text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
