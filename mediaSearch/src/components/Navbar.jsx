import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        className={` flex justify-between items-center text-center p-8 bg-linear-to-r from-blue-300 to-indigo-600 rounded-lg mb-6`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Media Search</h1>
        <div className={`flex gap-4`}>
          <Link
            className={`text-lg bg-white text-indigo-900 rounded-md px-4 py-2 hover:bg-indigo-900 hover:text-white transition duration-200 active:scale-95`}
            to={`/`}
          >
            Search
          </Link>
          <Link
            className={`text-lg bg-white text-indigo-900 rounded-md px-4 py-2 hover:bg-indigo-900 hover:text-white transition duration-200 active:scale-95`}
            to={`/collection`}
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
