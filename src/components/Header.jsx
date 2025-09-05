import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Gradient text class for reuse
  const gradientText =
    "bg-gradient-to-r from-[#ff1e1e] via-[#ff4d4d] to-[#b30000] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,0,0,0.6)]";

  return (
    <header className="w-full flex justify-between items-center py-4 px-4 lg:px-20 bg-black text-white relative z-50">
      {/* Logo */}
      <Link
        to="/"
        onClick={toggleMobileMenu}
        className={`text-3xl md:text-5xl font-extrabold tracking-wide flex items-center gap-1 ${gradientText}`}
      >
        Red
        <sup className="text-2xl md:text-3xl font-extrabold bg-gradient-to-t from-yellow-400 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse">
          3
        </sup>
        Agency
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link
          to="/pricing"
          className={`text-base font-medium uppercase tracking-wide transition-all duration-300 ${gradientText} hover:brightness-125`}
        >
          Pricing
        </Link>
        <Link
          to="/projects"
          className={`text-base font-medium uppercase tracking-wide transition-all duration-300 ${gradientText} hover:brightness-125`}
        >
          Projects
        </Link>
        <Link
          to="/testimonials"
          className={`text-base font-medium uppercase tracking-wide transition-all duration-300 ${gradientText} hover:brightness-125`}
        >
          Testimonials
        </Link>
      </nav>

      {/* Desktop Contact Button */}
      <Link
        to="/contact"
        className="hidden md:inline-block py-2 px-6 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-yellow-400 via-white to-yellow-300 text-black hover:brightness-110"
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2">
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden z-40">
          <Link
            to="/"
            className={`text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${gradientText}`}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className={`text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${gradientText}`}
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            to="/projects"
            className={`text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${gradientText}`}
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            to="/testimonials"
            className={`text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${gradientText}`}
            onClick={toggleMobileMenu}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold uppercase tracking-wide transition-all duration-300 bg-gradient-to-r from-yellow-400 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:brightness-125"
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
