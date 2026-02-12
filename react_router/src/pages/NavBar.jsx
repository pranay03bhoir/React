import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="bg-linear-to-r from-amber-400 via-amber-300 to-amber-200 py-4 px-8 shadow-xl">
      <nav>
        <ul className="flex justify-center gap-12 text-2xl font-semibold">
          <li className="hover:scale-105 hover:bg-pink-600/90 bg-white/30 px-3 py-1 rounded-md transition-all duration-300 shadow-md">
            <Link
              className="hover:text-white text-pink-900 px-2 py-1 transition-colors duration-200"
              to={`/`}
            >
              Home
            </Link>
          </li>
          <li className="hover:scale-105 hover:bg-blue-600/90 bg-white/30 px-3 py-1 rounded-md transition-all duration-300 shadow-md">
            <Link
              className="hover:text-white text-blue-900 px-2 py-1 transition-colors duration-200"
              to={`/about`}
            >
              About
            </Link>
          </li>
          <li className="hover:scale-105 hover:bg-red-600/90 bg-white/30 px-3 py-1 rounded-md transition-all duration-300 shadow-md">
            <Link
              className="hover:text-white text-red-900 px-2 py-1 transition-colors duration-200"
              to={`/contact`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
