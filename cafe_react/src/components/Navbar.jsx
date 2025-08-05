import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex fixed bg-white shadow-lg top-0 py-2 left-0 w-full z-50 items-center justify-between">
        <a href="/">
          <img src="/svg/logo_coffe.svg" alt="Logo" className="ml-10" />
        </a>

        {/* Desktop Navigation - unchanged */}
        <ul className="flex items-center not-md:text-sm not-sm:hidden justify-center gap-6 p-3 text-lg font-semibold">
          <li className="cursor-pointer secondary-text-h">
            <a href="/about-us">Home</a>
          </li>
          <li className="cursor-pointer secondary-text-h">
            <a href="/product">Menu</a>
          </li>
          <li className="cursor-pointer secondary-text-h">
            <a href="/delivery">About us</a>
          </li>
          <li className="cursor-pointer secondary-text-h">
            <a href="/delivery">Contact us</a>
          </li>
        </ul>

        {/* Mobile Menu Button - visible on small screens */}
        <button
          onClick={toggleMobileMenu}
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 mr-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Profile Circle - hidden on mobile */}
        <div className="rounded-full aspect-square w-10 bg-gray-300 mr-10 sm:block hidden"></div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-16 left-0 w-full z-50 bg-white shadow-lg sm:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <ul className="flex flex-col py-4">
          {/* Mobile Profile Section */}
          <li className="cursor-pointer secondary-text-h border-b border-gray-100">
            <a
              href="/about-us"
              className="block px-10 py-3 text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="cursor-pointer secondary-text-h border-b border-gray-100">
            <a
              href="/product"
              className="block px-10 py-3 text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
          </li>
          <li className="cursor-pointer secondary-text-h border-b border-gray-100">
            <a
              href="/delivery"
              className="block px-10 py-3 text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About us
            </a>
          </li>
          <li className="cursor-pointer secondary-text-h">
            <a
              href="/delivery"
              className="block px-10 py-3 text-lg font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
