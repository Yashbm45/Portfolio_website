import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-white text-lg font-bold">Yashwant Mahamuni</span>
            </div>
            <div className="hidden md:block py-1 ">
              <div className="ml-10 flex items-baseline space-x-4">
                <RouterLink to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</RouterLink>
                <RouterLink to="/About" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</RouterLink>
                <RouterLink to="/skills" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Skills</RouterLink>
                <RouterLink to="/projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</RouterLink>
                <RouterLink to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</RouterLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNav} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!navOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <RouterLink to="/" onClick={toggleNav} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</RouterLink>
            <RouterLink to="/about" onClick={toggleNav} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</RouterLink>
            <RouterLink to="/skills" onClick={toggleNav} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Skills</RouterLink>
            <RouterLink to="/projects" onClick={toggleNav} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Projects</RouterLink>
            <RouterLink to="/contact" onClick={toggleNav} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
